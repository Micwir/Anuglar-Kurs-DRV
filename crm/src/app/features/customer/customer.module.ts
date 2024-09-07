import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerIndexComponent } from './customer-index.component';
import { CustomerListComponent } from './views/customer-list/customer-list.component';
import { CustomerEditComponent } from './views/customer-edit/customer-edit.component';
import { CustomerNewComponent } from './views/customer-new/customer-new.component';
import { provideHttpClient } from '@angular/common/http';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { CoreModule } from '../../core/core.module';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerIndexComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerNewComponent,
    CustomerTableComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    CustomerRoutingModule
  ], 
  providers: [
    provideHttpClient(),
  ]
})
export class CustomerModule { }
