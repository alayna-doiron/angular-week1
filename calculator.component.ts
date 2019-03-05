import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

	numOne = 0
	numTwo = 0
	answer = 0

	add() {
		this.answer = this.numOne + this.numTwo
	}

	subtract() {
		this.answer = this.numOne - this.numTwo
	}

	multiply() {
		this.answer = this.numOne * this.numTwo
	}

	divide() {
		this.answer = this.numOne / this.numTwo 
	}

  constructor() { }



}
