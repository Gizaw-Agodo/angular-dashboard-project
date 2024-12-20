import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarModule } from './features/sidebar/sidebar.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appEffects, appStore } from './store/store';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    EffectsModule.forRoot(appEffects),
    StoreModule.forRoot(appStore), 
    BrowserModule,
    SharedModule,
    SidebarModule,
    DashboardModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers : [],
  bootstrap: [AppComponent],
})
export class AppModule {}
