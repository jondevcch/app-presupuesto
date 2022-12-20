import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule  } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatIconModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatGridListModule,
    MatPaginatorModule
  ],
})
export class MaterialModule {}
