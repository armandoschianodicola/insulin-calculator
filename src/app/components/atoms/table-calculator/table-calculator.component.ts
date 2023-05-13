import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-calculator',
  templateUrl: './table-calculator.component.html',
  styleUrls: ['./table-calculator.component.scss']
})
export class TableCalculatorComponent {

  @Input() key: any = '';
  @Input() label: string = '';
  // @Input() options: any[] = [];
  input_array: any[] = []


  value = 'Alimento'
  placeholder = 'Alimento'

  options = [
    {
      "label": "a", "value": 4
    },
    {
      "label": "b", "value": 5
    },
  ]
  
  current: number = 0
  needed: number = 150
  correction: number = 40
        
  newQuantity(): {} {  
    return {  
      food: '',  
      qty: 0,  
      carbs: 0,  
      total_carbs: 0,  
    } 
  }  
     
  addQuantity() { 
    this.input_array.push(this.newQuantity());
  }  
      
  onSelect(e: Event, i: any) {
    let value = (<HTMLSelectElement>e.target).value
    // this.productForm.value.quantities[i].carbs = value
  }

  getValue(): any {
    let res = this.placeholder;
    if (this.value) {
      let arr = this.options.filter((el: any) => el.value == this.value);
      if (arr.length > 0) res = arr[0].label;
    }
    return res;
  }
  
  getTotalCarbs(): number {
    let quantities = this.input_array
    let result: number = 0
    quantities.forEach((e: { qty: number; carbs: number }) => {
      result += ((e.qty * e.carbs) / 100)
    });
    return result
  }

  getInsulinFoodValue(): number {
    let result = this.getTotalCarbs() / 10
    return result
  }

  getInsulinTotalValue(): number {
    let insulinFoodValue = this.getInsulinFoodValue()
    let result = ((this.current - this.needed) / this.correction) + insulinFoodValue
  
    return result > 0 ? result : 0
  
  }

}
