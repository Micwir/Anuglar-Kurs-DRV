import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sub',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sub.component.html',
  styleUrl: './sub.component.scss'
})
export class SubComponent {

  @Input()
  values:any[] = [];


  @Output()
  edit = new EventEmitter();

  editItem(id: any){
    console.log(id);
    this.edit.emit(id);
  }
}
