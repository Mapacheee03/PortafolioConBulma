import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Nota: styleUrl -> styleUrls
})
export class AppComponent {
  title = 'PortafolioPrueba.App';
}
