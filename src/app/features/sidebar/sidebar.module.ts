import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SidebarComponent } from './sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';
import { MobileSidebarComponent } from './components/mobile-sidebar/mobile-sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LogoComponent,
    UserProfileComponent,
    MobileSidebarComponent,
  ],
  imports: [CommonModule, MatCardModule, SharedModule],
  exports: [SidebarComponent, UserProfileComponent, MobileSidebarComponent],
})
export class SidebarModule {}
