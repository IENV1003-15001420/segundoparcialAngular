import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Zodiaco } from './formulario/zodiaco/zodiaco';
import { FormsModule } from '@angular/forms';
import { Navbar } from './navbar/navbar';
import { Distancia } from './formulario/distancia/distancia';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Zodiaco, FormsModule, Navbar, Distancia, RouterOutlet],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}

