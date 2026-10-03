import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-zodiaco',
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
})
export class Zodiaco {

  nombre: string = '';
  paterno: string = '';
  materno: string = '';
  dia: number | null = null;
  mes: number | null = null;
  anio: number | null = null;
  sexo: string = '';

  mostrarResultado: boolean = false;
  nombreCompleto: string = '';
  edad: number = 0;
  signo: string = '';
  imgSigno: string = '';

  signosZodiacales: string[] = [
    'Mono', 'Gallo', 'Perro', 'Cerdo', 'Rata', 'Buey', 
    'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra'
  ];

  imprimir() {
    if (this.anio == null) return;
    if (this.mes == null) return;
    if (this.dia == null) return;

    let fecha = new Date();
    let anioActual = fecha.getFullYear();
    let mesActual = fecha.getMonth() + 1;
    let diaActual = fecha.getDate();

    if (this.anio < 1900) {
      alert('Año inválido');
      return;
    }
    if (this.anio > anioActual) {
      alert('Año inválido');
      return;
    }
    this.nombreCompleto = this.nombre + ' ' + this.paterno + ' ' + this.materno;
    this.edad = anioActual - this.anio;
    if (this.mes > mesActual) {
      this.edad = this.edad - 1; 
    }
    if (this.mes == mesActual) {
      if (this.dia > diaActual) {
        this.edad = this.edad - 1;
      }
    }
    let condicion = this.anio;
    while (condicion >= 12) {
      condicion = condicion - 12;
    }
    this.signo = this.signosZodiacales[condicion];

    switch (condicion) {
      case 0:
        this.imgSigno = 'https://data.travelchinaguide.com/images/zodiac/2026/search/monkey.png';
        break;
      case 1:
        this.imgSigno = 'https://data.travelchinaguide.com/images/zodiac/2026/search/rooster.png';
        break;
      case 2:
        this.imgSigno = 'https://data.travelchinaguide.com/images/zodiac/2026/search/dog.png';
        break;
      case 3:
        this.imgSigno = 'https://data.travelchinaguide.com/images/zodiac/2026/search/pig.png';
        break;
      case 4:
        this.imgSigno = 'https://data.travelchinaguide.com/images/zodiac/2026/search/rat.png';
        break;
      case 5:
        this.imgSigno = 'https://data.travelchinaguide.com/images/zodiac/2026/search/ox.png';
        break;
      case 6:
        this.imgSigno = 'https://data.travelchinaguide.com/images/zodiac/2026/search/tiger.png';
        break;
      case 7:
        this.imgSigno = 'https://data.travelchinaguide.com/images/zodiac/2026/search/rabbit.png';
        break;
      case 8:
        this.imgSigno = 'https://data.travelchinaguide.com/images/zodiac/2026/search/dragon.png';
        break;
      case 9:
        this.imgSigno = 'https://data.travelchinaguide.com/images/zodiac/2026/search/snake.png';
        break;
      case 10:
        this.imgSigno = 'https://data.travelchinaguide.com/images/zodiac/2026/search/horse.png';
        break;
      case 11:
        this.imgSigno = 'https://data.travelchinaguide.com/images/zodiac/2026/search/sheep.png';
        break;
      default:
        this.imgSigno = '';
        break;
    }
    this.mostrarResultado = true;
  }
}