import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-calculator',
  templateUrl: './table-calculator.component.html',
  styleUrls: ['./table-calculator.component.scss'],
})
export class TableCalculatorComponent {
  @Input() key: any = '';
  @Input() label: string = '';
  input_array: any[] = [];

  value = 'Alimento';
  placeholder = 'Alimento';

  current: number = 0;
  needed: number = 150;
  correction: number = 40;
  insulinBaseValue: number = 0;

  constructor() {
    this.addQuantity();
  }

  newQuantity(): {} {
    return {
      food: '',
      qty: 0,
      carbs: 0,
      total_carbs: 0,
    };
  }

  addQuantity() {
    this.input_array.push(this.newQuantity());
  }

  onInput(e: {value: number ,group_index: number, key: string}) {
    this.input_array[e.group_index][e.key] = e.value
    this.getInsulinFoodValue()
    this.getInsulinTotalValue()
  }

  removeQuantity(i: number) {
    if (i > -1) {
      this.input_array.splice(i, 1);
    }
  }

  getTotalCarbs(): number {
    let quantities = this.input_array;
    let result: number = 0;
    quantities.forEach((e: { qty: number; carbs: number }) => {
      result += (e.qty * e.carbs) / 100;
    });
    return result;
  }

  getInsulinFoodValue(): number {
    let result = this.getTotalCarbs() / 10;
    return result;
  }

  getInsulinBaseValue(): number {
    let result = (this.current - this.needed) / this.correction
    this.insulinBaseValue = result
    return result > 0 ? result : 0;
  }

  getInsulinTotalValue(): number {
    let result = this.getInsulinFoodValue() + this.insulinBaseValue;

    return result > 0 ? result : 0;
  }
}
