import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

let materialModules = [
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatSnackBarModule,
  MatInputModule,
  MatRadioModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatIconModule,
  MatSidenavModule,
  MatSliderModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatDividerModule
];

@NgModule({
  declarations: [],
  imports: [
    materialModules,
    CommonModule
  ],
  exports: [materialModules],
})
export class MaterialModule { }
