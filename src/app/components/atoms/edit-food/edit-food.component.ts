import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss']
})
export class EditFoodComponent {

  @Input() name: string = ''
  @Input() carbs: number = 0

}
