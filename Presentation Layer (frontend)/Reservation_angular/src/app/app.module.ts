import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { Tokeninterceptor } from 'src/interceptor/token.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DoBootstrap } from '@angular/core';


import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {NgbModule,NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {RouterModule} from '@angular/router';
import { AdminLayoutComponent } from './layouts copy/admin-layout/admin-layout.component';
import { ComponentsModule } from './components/components.module';
import { WaiterLayoutComponent } from './layouts copy/waiter-layout/waiter-layout.component';
import { CustomerLayoutModule } from './layouts copy/customer-layout/customer-layout.module';
import { CustomerLayoutComponent } from './layouts copy/customer-layout/customer-layout.component';
//import { AboutUsComponent } from './home/about-us/about-us.component';
//import {IndexComponent} from 'src/app/home/index/index.component';

//import {ContactUsComponent} from 'src/app/home/contact-us/contact-us.component';
import { DatePipe } from '@angular/common';
import { IndexService } from './service/index.service';

import { Header } from 'src/data/header';
import { HeaderComponent } from './home/header/header.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { FooterComponent } from './home/footer/footer.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { IndexComponent } from './home/index/index.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { WiaterDashbordComponent } from './pages/wiater-dashbord/wiater-dashbord.component';
import { CustomerDashbordComponent } from './pages/customer-dashbord/customer-dashbord.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OrderRoutingModule } from './pages/order/order-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { CustomerOrderComponent } from './pages/customer-order/customer-order.component';
import { ToastrModule } from 'ngx-toastr';
import { TestimonalDisplayComponent } from './home/testimonal-display/testimonal-display.component';
import { AuthService } from './service/auth.service';
import { httpInterceptorProvider } from 'src/interceptor';
import { ReservationNowComponent } from './pages/reservation-now/reservation-now.component';

@NgModule({
  declarations: [
  
    AppComponent,
    AdminLayoutComponent,
    WaiterLayoutComponent,
    CustomerLayoutComponent,
    HeaderComponent,
    AboutUsComponent,
    FooterComponent,
    ContactUsComponent,
    IndexComponent,
    TestimonalDisplayComponent,
    ReservationNowComponent  
  ],
  imports: [
    ToastrModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    ToastrModule.forRoot(),
    ComponentsModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
     NgxSpinnerModule,
     MatNativeDateModule,
     MatDatepickerModule,
     OrderRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
 exports: [MatFormFieldModule,
  HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
     NgxSpinnerModule,
     MatNativeDateModule,
     ToastrModule,
     MatDatepickerModule,
     OrderRoutingModule,
    FormsModule, ReactiveFormsModule
  
  ]
    ,
  providers: [ 
  
    httpInterceptorProvider,
    IndexService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
