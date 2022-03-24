import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnOptionsComponent } from './btn-options.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    BtnOptionsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[BtnOptionsComponent]
})
export class BtnOptionsModule { }
