import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/admin/navbar/navbar';
import { Home } from './components/admin/home/home';
import { Add } from './components/admin/add/add';
import { View } from './components/admin/view/view';
import { Manage } from './components/admin/manage/manage';
import { Login } from './components/login/login';
import { Userview } from './components/user/userview/userview';
import { Orders } from './components/user/orders/orders';
import { Orderdetails } from './components/user/orderdetails/orderdetails';
import { Usernavbar } from './components/user/usernavbar/usernavbar';
import { Userhome } from './components/user/userhome/userhome';
import { Carts } from './components/user/carts/carts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Viewdetails } from './components/user/viewdetails/viewdetails';

@NgModule({
  declarations: [
    App,
    Navbar,
    Home,
    Add,
    View,
    Manage,
    Login,
    Userview,
    Orders,
    Orderdetails,
    Usernavbar,
    Userhome,
    Carts,
    Viewdetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
