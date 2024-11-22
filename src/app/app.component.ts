import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  
  standalone: true,
  imports: [RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
