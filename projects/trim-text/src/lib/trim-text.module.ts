import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrimTextDirective } from './trim-text.directive';

@NgModule({
  imports: [
  	CommonModule,
  	FormsModule
  ],
  declarations: [TrimTextDirective],
  exports: [TrimTextDirective]
})
export class TrimTextModule { }
