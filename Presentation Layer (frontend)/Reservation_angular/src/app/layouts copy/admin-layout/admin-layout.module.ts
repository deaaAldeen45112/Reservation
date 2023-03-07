import { Component, NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MenuitemsRoutingModule } from "src/app/pages/menuitems/menuitems-routing.module";
import { MatNativeDateModule } from "@angular/material/core";
import { OrderRoutingModule } from "src/app/pages/order/order-routing.module";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { NgxSpinnerModule } from "ngx-spinner";
import { WiaterDashbordComponent } from "src/app/pages/wiater-dashbord/wiater-dashbord.component";
import { CustomerDashbordComponent } from "src/app/pages/customer-dashbord/customer-dashbord.component";
import { CustomerOrderComponent } from "src/app/pages/customer-order/customer-order.component";
import { ProfileComponent } from "src/app/pages/profile/profile.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule ,
    FormsModule,
    MatInputModule,
    MatListModule,
    NgbModule,
    MatRadioModule,
    MenuitemsRoutingModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    OrderRoutingModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    WiaterDashbordComponent,
    CustomerDashbordComponent,
    ProfileComponent,
    CustomerOrderComponent,   
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
