import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() listItem: any;
  @Output() sendToParent = new EventEmitter<number>();

  delete() {
    this.sendToParent.emit(this.listItem.id);
  }
}

// <!-- SHARE DATA PARENT TO CHILD -->
// <!-- PARENT HTML -> <Child [property]="value"></Child> -->
// <!-- CHILD TS -> @Input() property; -->

// <!-- SHARE DATA CHILD TO PARENT -->
// <!-- CHILD TS -> @Output() instanceEventEmitter = new EventEmitter<type>() -->
// <!-- CHILD TS -> this.instanceEventEmitter.emit(value) -->

// <!-- PARENT HTML -> <Child (instanceEventEmitter)="function($event)" -->
// <!-- PARENT TS -> function(value : type){} -->
