import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {

  //properties
  value: number = 0;
  result: number = 0;

  //methods to convert
  celsiusToFahrenheit(): void {
    this.result = this.value * 9/5 + 32;
  }

 fahrenheitToCelsius(): void {
  this.result = (this.value - 32) * (5/9);
  }

  meterToFeet(): void {
    this.result = this.value * 3.2808;
  }

  feetToMeter(): void {
    this.result = this.value / 3.2808;
  }
}
