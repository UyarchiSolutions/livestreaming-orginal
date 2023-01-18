import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { BehaviorSubject } from 'rxjs';
import { Env } from 'src/app/environment.dev';
import { IUser } from 'src/app/models';
import { loadingem } from './emitter.component';

@Injectable({
  providedIn: 'root',
})
export class AgorastreamingService_sub {
  constructor(public http: HttpClient) { }
  baseURL = Env.baseAPi;
  exprierd: any = false;
  rtc: any = {
    // For the local client.
    client: AgoraRTC.createClient({ mode: 'live', codec: 'vp8', role: "host" }),
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

  agoraServerEvents(rtc: any, uid: any) {
    console.log(rtc, 'asdasasd')
    rtc.client.on('user-unpublished', (user: any) => {
      if (uid == user.uid) {
        console.log(user, 'user-unpublished');
        // alert('hello');
        this.exprierd = true;
        loadingem.expierted.emit(true);

      }
    });
    console.log("hASdZsxASxs", rtc.client);

    rtc.client.on('user-published', async (user: any, mediaType: any) => {
      console.log(user, mediaType, 'user-published');
      console.log('countsss', user);
      if (uid == user.uid) {
        // loadingem.expierted.emit(false);
        await rtc.client.subscribe(user, mediaType);
        if (mediaType === 'video') {
          const remoteVideoTrack = user.videoTrack;

          setTimeout(() => {
            remoteVideoTrack.play('remote-playerlist' + uid);
          }, 100);
        }
        if (mediaType === 'audio') {
          const remoteAudioTrack = user.audioTrack;
          remoteAudioTrack.play();
        }
      }

    });

    // rtc.client.on('user-joined', (user: any) => {
    //   const id: any = user.uid;
    //   this.remoteUsers.push({ uid: id });
    //   this.liveUsersList.push({ uid: id });
    //   this.updateUserInfo.next(id);
    //   console.log('user-joined', user, this.remoteUsers, 'event1');
    // });
  }

  async localUser(token: any, uuid: any, type: any,channel:any) {
    await this.rtc.client.setClientRole('audience');
    await this.rtc.client.join(
      this.options.appId,
      channel,
      token,
      uuid
    );
  }

  async leaveCall(useId: any) {
    // this.rtc.localAudioTrack.close();
    // this.rtc.localVideoTrack.close();
    const playerContainer = document.getElementById(
      'remote-playerlist' + useId
    );
    playerContainer && playerContainer.remove();
    await this.rtc.client.leave();
  }
}
