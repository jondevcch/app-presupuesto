import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/structure/header/header.component';
import { FooterComponent } from './components/structure/footer/footer.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto/presupuesto.component';
import { ListaPresupuestoComponent } from './components/presupuesto/lista-presupuesto/lista-presupuesto.component';
import { MantPresupuestoComponent } from './components/presupuesto/mant-presupuesto/mant-presupuesto.component';
import { SideNavListComponent } from './components/structure/header/sideNavList/sideNavList.component';
import { MaterialModule } from './material.module';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: 'first', component: ListaPresupuestoComponent, data: { title: 'First Component' } },
  { path: 'segundo', component: FooterComponent, data: { title: 'segundo Component' } },

];

import { HttpClientModule } from "@angular/common/http";
import { GastoComponent } from './components/gasto/gasto/gasto.component';
import { ListaGastosComponent } from './components/gasto/lista-gastos/lista-gastos.component';
import { MantGastoComponent } from './components/gasto/mant-gasto/mant-gasto.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavListComponent,
    HeaderComponent,
    FooterComponent,
    PresupuestoComponent,
    ListaPresupuestoComponent,
    MantPresupuestoComponent,
    GastoComponent,
    ListaGastosComponent,
    MantGastoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule, 
    BrowserAnimationsModule ,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

