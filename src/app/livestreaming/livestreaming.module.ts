import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostmoduleModule } from './hostmodule/hostmodule.module';
import { SubscribermoduleModule } from './subscribermodule/subscribermodule.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HostmoduleModule,
    SubscribermoduleModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class LivestreamingModule { }
