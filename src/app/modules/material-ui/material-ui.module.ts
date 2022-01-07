import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_UI_COMPONENTS = [
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  imports: [ CommonModule, ...MATERIAL_UI_COMPONENTS ],
  exports: [ ...MATERIAL_UI_COMPONENTS ]
})
export class MaterialUiModule { }
