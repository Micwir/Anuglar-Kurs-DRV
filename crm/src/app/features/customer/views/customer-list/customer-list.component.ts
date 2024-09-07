import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit{

  public customers: Customer[] = [];
  public dateTimeOfData!: Date;
  public isLoading = false;
  public errorMessage: string | null = null;

  constructor(private customerService: CustomerService){
    console.log(this);
  }
  ngOnInit(): void {    
    this.loadCustomers();
  }

  loadCustomers() {
    this.isLoading = true;
    this.errorMessage = null;
    
    this.customerService.getAll()
      .subscribe({
        next: (customers) => {
          this.customers = customers;
          this.dateTimeOfData = new Date();
          this.isLoading = false;
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
          this.isLoading = false;
        }
      })
  }

  deleteCustomers(id: number) {
    this.isLoading = true;
    this.errorMessage = null;
    
    this.customerService.deleteById(id)
      .subscribe({
        next: () => {
          this.loadCustomers();

          //this.customers = this.customers.filter(c => c.id !== id)
          //this.isLoading = false;
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
          this.isLoading = false;
        }
      })
  }

  

}
