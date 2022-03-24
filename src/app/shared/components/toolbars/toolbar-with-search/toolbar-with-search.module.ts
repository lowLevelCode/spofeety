import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarWithSearchComponent } from './toolbar-with-search.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    ToolbarWithSearchComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
  ],
  exports: [ToolbarWithSearchComponent]
})
export class ToolbarWithSearchModule { }
