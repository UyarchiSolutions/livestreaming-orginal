import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostserviceService } from '../../hostmodule/hostservice.service';
import { SocketioService } from '../../hostmodule/socketio.service';

@Component({
  selector: 'app-subscribercomponent',
  templateUrl: './subscribercomponent.component.html',
  styleUrls: ['./subscribercomponent.component.css']
})
export class SubscribercomponentComponent implements OnInit {

  constructor(public api:HostserviceService,public router:Router,private chatService: SocketioService,) { }

  ngOnInit(): void {
    this.chatService.getMessage_new().subscribe(msg => {
      console.log('got a msg: ' + msg);
      this.get_live_tokens();

    });
    this.get_live_tokens();
  }
tokens:any;
  get_live_tokens(){
    this.api.get_host_users().subscribe((res:any)=>{
      console.log(res)
      this.tokens=res;
    })
  }
  watch_live(event:any){
    let uid = this.api.generateUid();
    this.api.generate_token_sub(uid, event,event._id).subscribe((ress: any) => {
      console.log(ress, 65789);
      this.router.navigate(['viewhost/golive'], { queryParams: { id: ress.value._id }})
    });


    // this.api.participents_limit(event._id).subscribe((res:any)=>{
      // console.log(res)
      // if(res.participents){
      // }
      // else{
      //   this.get_live_tokens();
      // }
    // })
  }
}
