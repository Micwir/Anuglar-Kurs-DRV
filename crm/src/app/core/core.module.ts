import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { ErrorBoxComponent } from './components/error-box/error-box.component';



@NgModule({
  declarations: [
    LoadingIndicatorComponent,
    ErrorBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingIndicatorComponent,
    ErrorBoxComponent
  ]
})
export class CoreModule { }
