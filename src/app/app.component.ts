import { Component } from '@angular/core';
import { WrapperComponent } from "./wrapper/wrapper.component";

@Component({
  selector: 'app-root',
  imports: [ WrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';
}
