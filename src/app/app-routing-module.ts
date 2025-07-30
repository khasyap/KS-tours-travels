import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Navbar } from './components/admin/navbar/navbar';
import { Home } from './components/admin/home/home';
import { Add } from './components/admin/add/add';
import { View } from './components/admin/view/view';
import { Manage } from './components/admin/manage/manage';
import { Usernavbar } from './components/user/usernavbar/usernavbar';
import { Userhome } from './components/user/userhome/userhome';
import { Userview } from './components/user/userview/userview';
import { Orders } from './components/user/orders/orders';
import { Orderdetails } from './components/user/orderdetails/orderdetails';
import { Carts } from './components/user/carts/carts';
import { Viewdetails } from './components/user/viewdetails/viewdetails';
import { City } from './components/admin/city/city';
import { Usercity } from './components/user/usercity/usercity';

const routes: Routes = [
  {path:'',component:Login},
  {path:'admin',component:Navbar,
    children:[
      {path:'home',component:Home},
      {path:'add',component:Add},
      {path:'city',component:City},
      {path:'view/:place',component:View},
      {path:'manage',component:Manage},
      
    ]
  },
  {path:'user',component:Usernavbar,
    children:[
      {path:'home',component:Userhome},
      {path:'city',component:Usercity},
      {path:'view/:place',component:Userview},
      {path:'orders',component:Orders},
      {path:'carts',component:Carts},
      {path:'details/:id',component:Viewdetails},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
