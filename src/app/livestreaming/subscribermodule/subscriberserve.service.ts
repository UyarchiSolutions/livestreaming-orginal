import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Env } from 'src/app/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class SubscriberserveService {

  constructor(public http:HttpClient) { }
  baseURL = Env.baseAPi

  get_old_chats(channel:any){
    return this.http.get(this.baseURL+"v2/chat/getoldchats?channel="+channel)
    
  }
}
