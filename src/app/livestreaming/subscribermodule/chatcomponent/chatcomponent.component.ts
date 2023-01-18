import { SocketioService } from './../../hostmodule/socketio.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubscriberserveService } from '../subscriberserve.service';
declare var $: any;
@Component({
  selector: 'app-chatcomponent',
  templateUrl: './chatcomponent.component.html',
  styleUrls: ['./chatcomponent.component.css']
})

export class ChatcomponentComponent implements OnInit {
  @Input("data") data: any
  @Input("sub") sub: any


  constructor(public fb: FormBuilder,public api:SocketioService,    public chat:SubscriberserveService    ) { }

  ngOnInit(): void {

    console.log(this.data, "iddddd")
    if (this.data != null) {
      this.chat_now();
      this.chatmessages.patchValue({
        channel: this.sub.chennel
      })
    
      this.chat.get_old_chats(this.sub.chennel).subscribe((res:any)=>{
        console.log(res,"asdas")
        res.forEach((element:any) => {
          this.addLesson(element.text, this.sub.Uid==element.userId?'me':'others',element.userId);
        });
        setTimeout(() => {
          this.scrollpage();
        },100)

      })
      this.api.getMessage_new_chat( this.sub.chennel).subscribe(msg => {
        this.addLesson(msg.text, this.sub.Uid==msg.userId?'me':'others',msg.userId);
        this.scrollpage();
      });
    }

  
  }

  chat_now() {
    if (this.data != null)
      console.log(this.data, this.sub, "iddddd")
  }
  type_message: any = new FormControl('', Validators.required);
  send_now() {
    if (this.type_message.valid) {
      // this.addLesson(this.type_message.value, "me", this.sub.uid);
      let send={ 
        channel: this.chatmessages.get("channel").value,
        text: this.type_message.value,
        userId: this.sub.Uid
      }
      console.log(this.api.send_message(send),send)
      this.type_message.reset();
      this.scrollpage();
      $("#chat-boxs").focus();
    }
  }
  chatmessages: any = this.fb.group({
    message: this.fb.array([], Validators.required),
    channel: new FormControl(),
  })
  get addpro() {
    return this.chatmessages.controls["message"] as FormArray;
  }
  addLesson(message: any, user: any, userId: any) {
    const lessonForm = this.fb.group({
      type: user,
      text: message,
      userId: userId
    });

    this.addpro.push(lessonForm);
  }

  scrollpage() {
    $('.contant-box').stop().animate({
      scrollTop: $(".contant-box ol").height()
    }, 500);
  }
}
