import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';
import { AppRoutingModule } from "./app.routes";
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { CapPipePipe } from './cap-pipe.pipe';
import { AdminModule } from "./admin/admin.module";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TformComponent,
    RformComponent,
    UserListComponent,
    UserDetailsComponent,
    LoginComponent,
    CapPipePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [LoginService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
