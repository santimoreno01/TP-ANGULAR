import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    RouterModule
  ]
})
export class ProductsModule { }
