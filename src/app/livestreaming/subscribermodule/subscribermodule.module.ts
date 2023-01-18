import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribercomponentComponent } from './subscribercomponent/subscribercomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ViewliveComponent } from './viewlive/viewlive.component';
import { ChatcomponentComponent } from './chatcomponent/chatcomponent.component';



@NgModule({
  declarations: [
    SubscribercomponentComponent,
    ViewliveComponent,
    ChatcomponentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SubscribermoduleModule { }
