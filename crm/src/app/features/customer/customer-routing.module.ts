import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerIndexComponent } from './customer-index.component';
import { CustomerListComponent } from './views/customer-list/customer-list.component';
import { CustomerNewComponent } from './views/customer-new/customer-new.component';
import { CustomerEditComponent } from './views/customer-edit/customer-edit.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: CustomerIndexComponent,
    children: [
      {
        path: '',
        component: CustomerListComponent
      },
      {
        path: 'new',
        component: CustomerNewComponent
      },
      {
        path: 'edit/:customerId',
        component: CustomerEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
