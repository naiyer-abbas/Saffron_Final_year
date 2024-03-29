import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderScheduleComponent } from './order-schedule/order-schedule.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthenticationGuard } from './auth/authentication.guard';
import { Authentication2Guard } from './auth/authentication2.guard';
import { ShopComponent } from './shop/shop.component';
import { TrackAnAssetComponent } from './track-an-asset/track-an-asset.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [Authentication2Guard]},
  {path: 'signup', component: SignupComponent, canActivate: [Authentication2Guard]},
  {path: 'otp-verification', component: OtpVerificationComponent},
  {path: 'user-details', component: UserDetailsComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard]},
  {path: 'order-schedule', component: OrderScheduleComponent, canActivate: [AuthenticationGuard]},
  {path: 'order-confirmation', component: OrderConfirmationComponent, canActivate: [AuthenticationGuard]},
  {path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthenticationGuard]},
  {path: 'shop', component: ShopComponent},
  {path: 'track-an-asset', component: TrackAnAssetComponent},
  {path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
