import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostserviceService } from '../hostservice.service';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-hostcomponent',
  templateUrl: './hostcomponent.component.html',
  styleUrls: ['./hostcomponent.component.css']
})
export class HostcomponentComponent implements OnInit {

  constructor(public api:HostserviceService,public router:Router,private chatService: SocketioService,) { }

  ngOnInit(): void {
    this.get_live_tokens();

    this.chatService.getMessage_new().subscribe(msg => {
      console.log('got a msg: ' + msg);
      this.get_live_tokens();

    });


  }
tokens:any;
  get_live_tokens(){
    this.api.get_host_users().subscribe((res:any)=>{
      console.log(res)
      this.tokens=res;
    })
  }

  generate_token(){
    let uid=this.api.generateUid()
    this.api.generate_token(uid).subscribe((res:any)=>{
      console.log(res)
      this.get_live_tokens();
      this.router.navigate(['/host/golive'], { queryParams: { id: res.value._id } });
    })

  }

  go_live(item:any){
    this.api.join_host(item._id).subscribe((res:any)=>{
      this.router.navigate(['/host/golive'], { queryParams: { id: item._id } });
    })
  }

}
