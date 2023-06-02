import { Component, EventEmitter, Output } from '@angular/core';
import { FoodOptionService } from 'src/app/services/food-option.service';

@Component({
  selector: 'app-select-food',
  templateUrl: './select-food.component.html',
  styleUrls: ['./select-food.component.scss'],
})
export class SelectFoodComponent {
  @Output() onSelectInput = new EventEmitter<any>();

  options: { label: string; value: number }[] = [];
  title = 'Alimento';
  placeholder = 'Alimento';

  constructor(private FoodOptionService: FoodOptionService) {
    // this.options = this.optionService.getMockOptions();
    // this.FoodOptionService.getBackendFoodOptions().forEach((elem) => {
    //   this.options.push({
    //     label: elem.name,
    //     value: elem.carbs,
    //   });
    // });
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
    this.onSelectInput.emit(e);
  }
}
