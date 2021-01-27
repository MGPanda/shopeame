import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePageRoutingModule } from './manage-page-routing.module';
import { ManagePageComponent } from './manage-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManagePageComponent],
  imports: [
    CommonModule,
    ManagePageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ManagePageModule { }
