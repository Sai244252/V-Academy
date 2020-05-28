import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent} from './Videos/video-component.component';
import { HomeComponent } from './Home/home-component.component';
import { DashBoardComponent } from './Dashboard/dashboard-component.component';
import { RegisterComponent } from './Register/register.component';
import { LoginComponent } from './Login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { discardPeriodicTasks } from '@angular/core/testing';
import { DisscussionBoxComponent } from './DiscussionBox/DiscussionBox.component';
import { MockTestComponent } from './MockTest/MockTest.component';
import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatDialog, MatDialogConfig} from '@angular/material/dialog';



const appRoutes : Routes =[
  { path : 'Home', component: HomeComponent  },
  { path : 'Videos', component: VideoComponent  },
  { path : 'DashBoard', component: DashBoardComponent  },
  { path : 'Register', component: RegisterComponent },
  { path : 'Login', component: LoginComponent},
  { path : 'DiscussionBox', component: DisscussionBoxComponent},
  { path : 'MockTests', component: MockTestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    HomeComponent,
    MockTestComponent,
    DashBoardComponent,
    RegisterComponent,
    LoginComponent,
    DisscussionBoxComponent
    // MatDialog,
    // MatDialogConfig
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    // BrowserAnimationsModule ,
    // MatDialog,
    // MatDialogConfig
  ],
  providers: [],
  bootstrap: [AppComponent,
     VideoComponent,
      HomeComponent,
       DashBoardComponent,
       RegisterComponent,
       DisscussionBoxComponent,
       LoginComponent,
       MockTestComponent,
      //  MatDialog,
      //  MatDialogConfig
  ],
  // entryComponents : [RegisterComponent]
})
export class AppModule { }
