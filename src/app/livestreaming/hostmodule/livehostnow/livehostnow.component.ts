import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgorastreamingService } from '../agorastreaming.service';
import { HostserviceService } from '../hostservice.service';
import AgoraRTC from 'agora-rtc-sdk-ng';

@Component({
  selector: 'app-livehostnow',
  templateUrl: './livehostnow.component.html',
  styleUrls: ['./livehostnow.component.css'],
})
export class LivehostnowComponent implements OnInit, OnDestroy {
  id: any;
  constructor(public route: ActivatedRoute, public api: HostserviceService, public stream: AgorastreamingService, public router: Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      this.id = params.params.id;
      this.get_token_details();

    });
  }

  get_token_details() {
    this.api.get_token_details_host(this.id).subscribe((res: any) => {
      console.log(res);
      this.expiered_message(res)
      if (!this.expiered) {
        this.start_call_now(res, res.chennel);
        this.userId = res.Uid;
      }
    });
  }

  async start_call_now(res: any, channel: any) {
    await this.stream.localUser(res.token, res.Uid, '', channel);
    this.start_recording();
  }

  async logout() {
    await this.stream.leaveCall();
  }
  ngOnDestroy(): void {
    this.logout();
    console.log("log out")
    this.api.leave_host(this.id).subscribe((res: any) => {
      console.log(res)
    })
    this.stop_recording();
  }
  userId: any;
  deviceId: any = '';
  switch_cam() {
    this.deviceId = this.stream.switch_cam(this.deviceId);
  }

  expiered: any = false;
  expiered_message(res: any) {
    console.log(res, 'sdcss dcs ds')
    console.log()
    let ex = new Date(res.expDate).getTime() - new Date().getTime();
    setTimeout(() => {
      this.expiered = true;
      this.logout();
      this.router.navigate(['host'])
    }, ex)
  }
  recording_api: any;
  start_recording() {
    this.api.acquire_recording(this.id).subscribe((acquire: any) => {
      console.log(acquire, 'acquire');
      setTimeout(() => {
        this.api.start_recording({ ...acquire, ...{ id: this.id } }).subscribe((start: any) => {
          this.recording_api = start
          setTimeout(() => {
            console.log(start, 'start')
            this.api.query_recording({ ...start, ...{ id: this.id } }).subscribe((query: any) => {
              console.log(query, 'query')
            })
          },1000)
        })
      },6000)
    })
  }
  stop_recording() {
    if (this.recording_api != null) {
      this.api.stop_recording({ resourceId: this.recording_api.resourceId, sid: this.recording_api.sid, id: this.id }).subscribe((res: any) => {
        this.recording_api = res
      })
    }
  }
}
