import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessLinksComponent } from './access-links.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AccessLinksComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,    
    RouterModule
  ],
  exports: [AccessLinksComponent]
})
export class AccessLinksModule { }
