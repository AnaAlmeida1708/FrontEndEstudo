import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components/calculadora.component';
import { CalculadoraService } from './services/calculadora.service';
import { CalculadoraRoutingComponent } from './calculadora-routing.component';
import { CalculadoraRoutingModule } from './calculadora-routing.module';



@NgModule({
  declarations: [
    CalculadoraComponent,
    CalculadoraRoutingComponent,
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule,
  ],
  exports: [ 
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
