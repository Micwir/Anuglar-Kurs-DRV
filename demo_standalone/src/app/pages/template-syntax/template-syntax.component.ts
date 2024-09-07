import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
CommonModule
import { of } from 'rxjs';
import { SubComponent } from '../../components/sub/sub.component';

@Component({
  selector: 'app-template-syntax',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    SubComponent
  ],
  templateUrl: './template-syntax.component.html',
  styleUrl: './template-syntax.component.scss'
})
export class TemplateSyntaxComponent {

//Impliziert
  value = 500;
  public valueNum: number = 250;

  public textSnippet = 'Ein Text!';

  date = new Date();

  htmlSnippet = `
  Ein <strong>wichtiger</strong> Text`;

  formInvalid = true;
  readonlyState = false;
  projectId = 'KJGRE235'

  errorState = true;

  //Observable
  text$ = of('Test-String');

  listOfItems = [
    {
      id: 43,
      name: 'Testitem'
    },
    {
      id: 65,
      name: 'Testitem 2'
    }
  ]
   formValue = 'Initialer Wert';

  clickHandler() {
    this.errorState = !this.errorState;
  }

  formSubmitHandler(event: Event) {
    event.preventDefault();
    console.log(event);
    console.log('Formular abgesendet');
  }

  submitHandler(event: Event){
    console.log(this.formValue);
  }

  editHandler(id: any){
    console.log(id)
  }
}
