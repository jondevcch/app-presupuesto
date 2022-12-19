import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/structure/header/header.component';
import { FooterComponent } from './components/structure/footer/footer.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto/presupuesto.component';
import { ListaPresupuestoComponent } from './components/presupuesto/lista-presupuesto/lista-presupuesto.component';
import { MantPresupuestoComponent } from './components/presupuesto/mant-presupuesto/mant-presupuesto.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PresupuestoComponent,
    ListaPresupuestoComponent,
    MantPresupuestoComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
