import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { Console } from 'console';
import { BehaviorSubject } from 'rxjs';
import { Env } from 'src/app/environment.dev';
import { IUser } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class AgorastreamingService {
  constructor(public http: HttpClient) { }
  baseURL = Env.baseAPi;

  rtc: any = {
    // For the local client.
    client: AgoraRTC.createClient({ mode: 'rtc', codec: 'vp9' ,role: "host" }),
    // For the local audio and video tracks.
    localAudioTrack: null,
    localVideoTrack: null,
  };
  options = {
    appId: '08bef39e0eb545338b0be104785c2ae1',
    channel: 'test',
    // token: '',
    // uid: null
  };

  remoteUsers: IUser[] = [];
  updateUserInfo = new BehaviorSubject<any>(null);
  liveUsersList: any = [];

  // agoraServerEvents(rtc: any) {
  //   // rtc.client.on('user-published', async (user: any, mediaType: any) => {
  //   //   console.log(user, mediaType, 'user-published');

  //   //   await rtc.client.subscribe(user, mediaType);
  //   //   if (mediaType === 'video') {
  //   //     const remoteVideoTrack = user.videoTrack;

  //   //     setTimeout(() => {
  //   //       remoteVideoTrack.play('remote-playerlist' + user.uid);
  //   //     }, 100);

  //   //   }
  //   //   if (mediaType === 'audio') {
  //   //     const remoteAudioTrack = user.audioTrack;
  //   //     remoteAudioTrack.play();
  //   //   }
  //   // });
  //   // rtc.client.on('user-unpublished', (user: any) => {
  //   //   console.log(user, 'user-unpublished');
  //   // });


  //   // rtc.client.on('user-joined', (user: any) => {
  //   //   const id: any = user.uid;
  //   //   this.remoteUsers.push({ uid: id });
  //   //   this.liveUsersList.push({ uid: id });
  //   //   this.updateUserInfo.next(id);
  //   //   console.log('user-joined', user, this.remoteUsers, 'event1');
  //   // });
  // }


  async localUser(token: any, uuid: any, type: any, channel: any) {
    console.log(this.rtc.client, 'asdasasdas')
    await this.rtc.client.join(this.options.appId, channel, token, uuid);
    if (type != 'live') {
      this.rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      this.rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack({
        encoderConfig: '1080p_3',
      });
      this.rtc.localVideoTrack.play('local-player');
      await this.rtc.client.publish([this.rtc.localAudioTrack, this.rtc.localVideoTrack]);
    }
  }


  async leaveCall() {
    this.rtc.localAudioTrack.close();
    this.rtc.localVideoTrack.close();
    // this.rtc.client.remoteUsers.forEach((user: any) => {
    //   const playerContainer = document.getElementById('remote-playerlist' + user.uid.toString());
    //   playerContainer && playerContainer.remove();
    // });
    await this.rtc.client.leave();

  }


  async switch_cam(deviceId: any) {
    const cams = await AgoraRTC.getCameras();
    console.log(cams)
    let active: any = cams.findIndex((a: any) => a.label == this.rtc.localVideoTrack._deviceName)
    if (deviceId != '') {
      active = cams.findIndex((a: any) => a.deviceId == deviceId.__zone_symbol__value)
    }
    let index = active;
    if (cams.length > active + 1 && active != cams.length) {
      index++;
    }
    else {
      index = 0;
    }
    this.rtc.localVideoTrack.setDevice(cams[index].deviceId);
    return cams[index].deviceId;
  }



}
