import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-box',
  templateUrl: './error-box.component.html',
  styleUrl: './error-box.component.scss'
})
export class ErrorBoxComponent {

  @Input()
  public error: string | null = null;
}
