import { SubscribercomponentComponent } from './livestreaming/subscribermodule/subscribercomponent/subscribercomponent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostcomponentComponent } from './livestreaming/hostmodule/hostcomponent/hostcomponent.component';
import { HomepagecmpComponent } from './homepagecmp/homepagecmp.component';
import { LivehostnowComponent } from './livestreaming/hostmodule/livehostnow/livehostnow.component';
import { ViewliveComponent } from './livestreaming/subscribermodule/viewlive/viewlive.component';

const routes: Routes = [
  { path: '', component: HomepagecmpComponent },
  {
    path: 'host',
    children: [
      { path: '', component: HostcomponentComponent, pathMatch: 'full' },
      { path: 'golive', component: LivehostnowComponent, pathMatch: 'full' },
    ],
  },
  { path: 'viewhost', children: [
    { path: '', component: SubscribercomponentComponent, pathMatch: 'full' },
    { path: 'golive', component: ViewliveComponent, pathMatch: 'full' },
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
