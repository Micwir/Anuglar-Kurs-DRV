import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Customer } from '../model/customer';
import { retry, type Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

const url = environment.api + 'customers/';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private http: HttpClient) { 

  }

  getAll(): Observable<Customer[]>{
    return this.http
              .get<Customer[]>(url)
              .pipe(retry(3)) //pipable operator rxjs.dev : Methodik erklärt in reactivex.io
              ;
  }

  deleteById(id: number): Observable<object>{
    return this.http
      .delete(url + id);
  }

  postCustromer(customer: Partial<Customer>): Observable<Customer> {
    return this.http.post<Customer>(url, customer);
  }

  putCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(url + customer.id, customer);
  }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(url + id);
  }

}
