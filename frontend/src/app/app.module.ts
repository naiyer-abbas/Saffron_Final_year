import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { CommonService } from './common.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderScheduleComponent } from './order-schedule/order-schedule.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CostEstimationService } from './cost-estimation.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShopComponent } from './shop/shop.component';
import { TrackAnAssetComponent } from './track-an-asset/track-an-asset.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    OtpVerificationComponent,
    UserDetailsComponent,
    DashboardComponent,
    OrderScheduleComponent,
    OrderConfirmationComponent,
    MyOrdersComponent,
    AboutUsComponent,
    ShopComponent,
    TrackAnAssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CommonService, CostEstimationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
