import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/structure/header/header.component';
import { FooterComponent } from './components/structure/footer/footer.component';
import { ListaPresupuestoComponent } from './components/presupuesto/lista-presupuesto/lista-presupuesto.component';
import { MantPresupuestoComponent } from './components/presupuesto/mant-presupuesto/mant-presupuesto.component';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: '', redirectTo: 'presupuestos', pathMatch: 'full' },
  { path: 'presupuestos', component: ListaPresupuestoComponent },
  { path: 'gastos/:id', component: ListaGastosComponent },
  { path: '**', redirectTo: '/presupuestos', pathMatch: 'full'}
];

import { HttpClientModule } from "@angular/common/http";
import { ListaGastosComponent } from './components/gasto/lista-gastos/lista-gastos.component';
import { MantGastoComponent } from './components/gasto/mant-gasto/mant-gasto.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListaPresupuestoComponent,
    MantPresupuestoComponent,
    ListaGastosComponent,
    MantGastoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { useHash: true}),
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

