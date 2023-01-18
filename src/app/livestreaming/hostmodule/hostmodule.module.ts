import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostcomponentComponent } from './hostcomponent/hostcomponent.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LivehostnowComponent } from './livehostnow/livehostnow.component';



@NgModule({
  declarations: [
    HostcomponentComponent,
    LivehostnowComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HostmoduleModule { }
