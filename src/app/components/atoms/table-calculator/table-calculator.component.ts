import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup , FormControl} from '@angular/forms';

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
    console.log(this.quantities() as FormArray)
    
  }

}
