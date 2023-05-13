import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent {

  @Input() group_index: any

  removeQuantity(i:number) {  
    // this.quantities().removeAt(i);  
  } 

}
