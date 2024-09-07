import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html'
})
export class CustomerNewComponent {
  isLoading = false;
  errorMessage: string | null = null;


  constructor(private customerService: CustomerService, private router: Router){}


  createCustomer(customer: Partial<Customer>){
    
    
    this.isLoading = true;
    this.errorMessage = null;
    
    this.customerService.postCustromer(customer)
          .subscribe({
            next: () => {
              this.router.navigate(['/dashboard'])
              this.isLoading = false;
            },
            error: (e: Error) => {
              this.errorMessage = e.message;
              this.isLoading = false;
            }
          })
  }
}
