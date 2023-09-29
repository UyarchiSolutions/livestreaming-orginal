import { Env } from './environment.dev';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LivestreamingModule } from './livestreaming/livestreaming.module';
import { HttpClientModule } from '@angular/common/http';
import { HomepagecmpComponent } from './homepagecmp/homepagecmp.component';
import { HeadercmpComponent } from './headercmp/headercmp.component';
import { TestingliveComponent } from './testinglive/testinglive.component';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// const config: SocketIoConfig = { url: Env.baseAPi+'v2/generateRTC/leave/participents/limit', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomepagecmpComponent,
    HeadercmpComponent,
    TestingliveComponent
  ],
  imports: [
    LivestreamingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // SocketIoModule.forRoot(config)
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
