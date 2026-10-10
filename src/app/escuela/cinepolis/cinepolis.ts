import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ICliente } from '../cliente';

@Component({
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
  formulario!: FormGroup;

  nuevaCompra: ICliente ={
    nombre: '',
    boletos: 0,
    totalPagar: 0,
    msnError: '',
  }

  ngOnInit(): void{
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      cantClientes: new FormControl(''),
      tdCineco: new FormControl(''),
      cantBoletos: new FormControl(''),
    });
  }

  pagar(): void{
    this.nuevaCompra.msnError = '';
    this.nuevaCompra.totalPagar = 0;

    this.nuevaCompra.nombre = this.formulario.value.nombre;
    let clientes = this.formulario.value.cantClientes;
    let cineco = this.formulario.value.tdCineco;
    let boletos = this.formulario.value.cantBoletos;

    const precioBoleto = 12;
    const maxBoletos = clientes * 7;

    if (boletos > maxBoletos) {
      this.nuevaCompra.msnError = "Error: Solo se permite 7 Boletos por persona";
      return;
    }
     let total = boletos * precioBoleto;
     let desc = 0;
     
     if (boletos > 5) {
      desc = 0.15;
     }else if (boletos >= 3 && boletos <=5) {
      desc = 0.10;      
     }

     total = total - (total * desc);
     if (cineco === 'Si') {
      total = total - (total * 0.10);
     }
     this.nuevaCompra.totalPagar = total;
     this.nuevaCompra.boletos = boletos;
  }

  salir(): void{
    this.formulario.reset({
      tdCineco: 'No'
    });
    this.nuevaCompra.nombre = '';
    this.nuevaCompra.boletos = 0;
    this.nuevaCompra.totalPagar = 0;
    this.nuevaCompra.msnError = '';
  }
}
