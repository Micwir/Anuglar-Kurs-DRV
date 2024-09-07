import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.scss'
})
export class CustomerTableComponent {

  @Input()
  public customers: Customer[] = [];

  @Output()
  deleteEvent = new EventEmitter<number>()

  delete(id: number){
    console.log(id);
    this.deleteEvent.emit(id);
  }
}
