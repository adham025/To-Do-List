import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() sendToParent = new EventEmitter<string>();
  value: string = '';

  add() {
    if (this.value.trim()) {
      this.sendToParent.emit(this.value);
      this.value = '';
    }
  }
}
