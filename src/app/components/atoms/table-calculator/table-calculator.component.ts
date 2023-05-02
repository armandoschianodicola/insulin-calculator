import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup , FormControl, AbstractControl} from '@angular/forms';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-table-calculator',
  templateUrl: './table-calculator.component.html',
  styleUrls: ['./table-calculator.component.scss']
})
export class TableCalculatorComponent {

  name = 'Angular';  
    
  productForm: FormGroup;  
     
  constructor(private fb:FormBuilder) {  
     
    this.productForm = this.fb.group({  
      name: '',  
      quantities: this.fb.array([]) ,  
    });  
  }  
    
  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      qty: '',  
      carbs: '',  
      total_carbs: '',  
    })  
  }  
     
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.productForm.value);  
  }
  
  onInput(event: any) {
    console.log(event)
    let fa = this.quantities() as FormArray
    console.log(fa)
    console.log(fa.at(2))
  }

  getTotalCarbs(): number {
    let quantities = this.productForm.value.quantities
    let result: number = 0
    quantities.forEach((e: { qty: number; carbs: number }) => {
      result += ((e.qty * e.carbs) / 100)
    });
    return result
  }

  getInsulinValue(): number {
    let result = this.getTotalCarbs() / 10
    return result
  }

}
