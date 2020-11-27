import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { ListComponent } from './list/list.component';
import { OrderByPipe } from './pipe/order-by.pipe';
import { SelectComponent } from './select/select.component';
import { PhonePipe } from './pipe/phone.pipe';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user.routing.module';

@NgModule({
  declarations: [
    DataComponent,
    ListComponent,
    SelectComponent,
    UserComponent,
    UserDetailComponent,
    PhonePipe,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
