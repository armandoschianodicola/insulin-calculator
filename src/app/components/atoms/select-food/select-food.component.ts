import { Component, EventEmitter, Output } from '@angular/core';
import { FoodOptionService } from 'src/app/services/food-option.service';

@Component({
  selector: 'app-select-food',
  templateUrl: './select-food.component.html',
  styleUrls: ['./select-food.component.scss'],
})
export class SelectFoodComponent {
  @Output() onSelectEvent = new EventEmitter<any>();

  options: { label: string; value: number }[] = [];
  title = 'Alimento';
  placeholder = 'Alimento';

  constructor(private FoodOptionService: FoodOptionService) {
    this.FoodOptionService.getBackendFoodOptions().subscribe(
      (data: any) => {
        data.forEach((params: any) => {
          this.options.push({
            label: params.name,
            value: params.carbs
          })
        })      
      }
    )
  }

  onSelect(e: Event) {
    this.onSelectEvent.emit({
      label: '',
      value: (e.target as HTMLInputElement).value
    });
  }
}
