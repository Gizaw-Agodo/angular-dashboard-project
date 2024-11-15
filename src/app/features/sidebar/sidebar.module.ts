import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SidebarComponent } from './sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SidebarComponent, LogoComponent, UserProfileComponent],
  imports: [CommonModule, MatCardModule, SharedModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
