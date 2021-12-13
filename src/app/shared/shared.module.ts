import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

// Material
import { MaterialModule } from '@material/material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FilterPipePipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FilterPipePipe
  ]
})
export class SharedModule { }
