import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, FormComponent, CardComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent {
  lists: { id: number; value: string }[] = [];

  handleChildData(data: string) {
    const added = { id: Date.now(), value: data };
    this.lists.push(added);
  }

  handleDeleteTask(id: number) {
    this.lists = this.lists.filter(task => task.id !== id);
  }

}
