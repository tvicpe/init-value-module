import { NgModule } from '@angular/core';
import { AsyncInitialValueComponent } from './async-initial-value.component';
import { InitValuePipe } from './init-value.pipe';



@NgModule({
  declarations: [AsyncInitialValueComponent, InitValuePipe],
  imports: [
  ],
  exports: [AsyncInitialValueComponent, InitValuePipe]
})
export class AsyncInitialValueModule { }
