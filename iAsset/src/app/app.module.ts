import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { StockComponent } from './pages/backend/stock/stock.component';
import { ReportComponent } from './pages/backend/report/report.component';
import { UsersComponent } from './pages/backend/users/users.component';
import { SettingComponent } from './pages/backend/setting/setting.component';
import { SidebarBackendComponent } from './shared/sharedBackend/sidebar-backend/sidebar-backend.component';
import { HeaderBackendComponent } from './shared/sharedBackend/header-backend/header-backend.component';
import { FooterBackendComponent } from './shared/sharedBackend/footer-backend/footer-backend.component';
import { HeaderFrontendComponent } from './shared/sharedFrontend/header-frontend/header-frontend.component';
import { FooterFrontendComponent } from './shared/sharedFrontend/footer-frontend/footer-frontend.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendLayoutComponent,
    BackendLayoutComponent,
    HomeComponent,
    DashboardComponent,
    StockComponent,
    ReportComponent,
    UsersComponent,
    SettingComponent,
    SidebarBackendComponent,
    HeaderBackendComponent,
    FooterBackendComponent,
    HeaderFrontendComponent,
    FooterFrontendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
