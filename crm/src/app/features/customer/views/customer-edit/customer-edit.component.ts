import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html'
})
export class CustomerEditComponent implements OnInit{

  id: number;

  public isLoading = false;
  public errorMessage: string | null = null;

  public customer !: Customer;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private router: Router){
    this.id = +this.activatedRoute.snapshot.params['customerId'];
  }

  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer(){
    this.isLoading = true;
    this.errorMessage = null;
    
    this.customerService.getById(this.id)
          .subscribe({
            next: (customer) => {
              this.customer = customer;
              this.isLoading = false;              
            },
            error: (e: Error) => {
              this.errorMessage = e.message;
              this.isLoading = false;
            }
          })
  }

  updateCustomer(customer: Customer){
    customer.id = this.customer.id;
    
    this.isLoading = true;
    this.errorMessage = null;
    
    this.customerService.putCustomer(customer)
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
