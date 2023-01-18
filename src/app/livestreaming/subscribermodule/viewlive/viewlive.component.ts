import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { HostserviceService } from '../../hostmodule/hostservice.service';
import { AgorastreamingService_sub } from '../agorastreaming.service';
import { loadingem } from '../emitter.component';
import { SubscriberserveService } from '../subscriberserve.service';

@Component({
  selector: 'app-viewlive',
  templateUrl: './viewlive.component.html',
  styleUrls: ['./viewlive.component.css'],
})
export class ViewliveComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public api: HostserviceService,
    public stream: AgorastreamingService_sub,
    public router: Router,
    public chat:SubscriberserveService
  ) {}
  id: any;
  audio: any;
  videos: any;
  ngOnInit(): void {


    this.route.queryParamMap.subscribe((params: any) => {
      this.id = params.params.id;
      this.get_token_details();
      // this.joinCall('');
    });
    console.log(this.stream.rtc.client);
    console.log(AgoraRTC.getPlaybackDevices(), 9878687);
    console.log(AgoraRTC.getCameras(), 9878687);
    this.audio = AgoraRTC.getDevices();
    this.videos = AgoraRTC.getCameras();
    this.videos = this.videos.__zone_symbol__value;
    this.audio = this.audio.__zone_symbol__value;
    this.audio.forEach((element: any) => {});
    if ((this, this.stream.exprierd)) {
      console.log('exas');
    }

    loadingem.expierted.subscribe((res: any) => {
      console.log(res, 'resds');
      if (res) {
        // alert("true")
        // window.history.back();
        this.logout();
        this.router.navigate(['viewhost']);
      }
    });
  }
  userId: any;
  get_token_details() {
    this.api.get_token_details_sub(this.id).subscribe((res: any) => {
      console.log(res," asda")
      this.userId = res.hostUid;
      // console.log(res);
      this.expiered_message(res);
      if (!this.expiered) {
        this.joinCall(res);
      }
    });

    ('');
  }

  token_details: any;
  joinCall(res: any) {
    this.stream.agoraServerEvents(this.stream.rtc, res.hostUid);
    // let uid = this.api.generateUid();
    // this.api.generate_token_sub(uid, res,this.id).subscribe((ress: any) => {
      // console.log(ress, 65789);
      this.token_details = res;
      this.stream.localUser(res.token, res.Uid, '',res.chennel);
    // });
  }
  ngOnDestroy(): void {
    this.logout();
    console.log('log out');
  }
  async logout() {
    await this.stream.leaveCall(this.userId);
    this.api
      .participents_leave(this.token_details._id)
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  value_change(event: any) {
    alert('uptated');
  }
  expiered: any = false;

  expiered_message(res: any) {
    console.log(res, 'sdcss dcs ds');
    console.log();
    let ex = new Date(res.expDate_host).getTime() - new Date().getTime();
    setTimeout(() => {
      this.expiered = true;
      this.logout();
      // this.router.navigate(['viewhost']);
    }, ex);
  }


  
}
