import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-location',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './input-location.component.html',
  styleUrl: './input-location.component.css'
})
export class InputLocationComponent {
  @Output() outLocation = new EventEmitter<string>();
  @Input() classes: string = '';

  city: string = '';

  getLocation( loc: HTMLInputElement ) {    
    this.outLocation.emit(loc.value);
    loc.value = '';
  }
}
