import { Env } from './../../environment.dev';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
 
  private socket: Socket;
  private url = Env.baseAPi; // your server local path
  // private url = "http://localhost:3005"; // your server local path

  constructor() {
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
  }

  getMessage_new(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('subscriberjoined', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
  }
  getMessage_new_chat(channel:any): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(channel, (data:any) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
  }
  send_message(body:any){
    return this.socket.emit('groupchat', body);
  }

  
}
