import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FoodOptionService } from 'src/app/services/food-option.service';


@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss']
})
export class EditFoodComponent {

  constructor(
    private FoodOptionService: FoodOptionService
  ){

  }
  
  @Input() currentEdit: {id:number, food: string, carbs: number} = {
    'id': 0,
    'food': '',
    'carbs': 0
  }
  @Output() onCloseInput = new EventEmitter<any>();

  onClose(): void {
    this.onCloseInput.emit()
  }

  onSave(): void {
    let body = {
      'food': this.currentEdit.food,
      'carbs': this.currentEdit.carbs,
    }
    console.log(body)
    this.FoodOptionService.postBackendFoodOptions(
      this.currentEdit.id, body).subscribe()
  }

}
