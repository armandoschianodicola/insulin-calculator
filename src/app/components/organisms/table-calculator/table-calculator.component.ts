import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { InputGroupValues } from 'src/app/entities/input-group-values';

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

  current: number = 150;
  needed: number = 150;
  correction: number = 40;
  insulinBaseValue: number = 0;
  currentEdit: {'food': string, 'carbs': number} = {
    'food': '',
    'carbs': 0 
  }

  showPopup: boolean = false

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

  onInput(data: any): void {
    for (let prop in data.input_values){
      this.input_array[data.group_index][prop] = data.input_values[prop]
    }
    this.getInsulinFoodValue()
    this.getInsulinTotalValue()
  }

  removeQuantity(i: number) {
    if (i > -1) {
      this.input_array.splice(i, 1);
    }
  }

  editInput(i: number) {
    this.showPopup = true
    if (i > -1) {
      let result = this.input_array[i];
      console.log(result)
      this.currentEdit = {
        'food': result['food'],
        'carbs': result['carbs'],
      }
      this.input_array = this.input_array
    }
    console.log(this.input_array)
  }

  onCloseInput() {
    this.showPopup = false
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
