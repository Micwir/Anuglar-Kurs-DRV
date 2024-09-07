import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent implements OnInit {

  customerFormGroup: FormGroup;

  @Input()
  formData ?: Customer;

  @Output()
  customerFormSubmit = new EventEmitter()

  constructor(private fb: FormBuilder) {
    this.customerFormGroup = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      credit: [
        0,
        [
          Validators.required,
          Validators.min(0)
        ]
      ]
    })
  }

  ngOnInit(): void {
    
    if(this.formData !== void 0) { // wenn formData undefined ist
      this.customerFormGroup.patchValue(this.formData);
    } 
  }

  formSubmitHandler(){
    const customer = this.customerFormGroup.value;
    this.customerFormSubmit.emit(customer)
  }

}
