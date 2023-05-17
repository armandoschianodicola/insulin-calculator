import { Component, EventEmitter, Output } from '@angular/core';
import { OptionService } from 'src/app/services/option.service';

@Component({
  selector: 'app-select-food',
  templateUrl: './select-food.component.html',
  styleUrls: ['./select-food.component.scss'],
})
export class SelectFoodComponent {

  @Output() onSelectInput = new EventEmitter<any>();

  options: {label: string, value: number}[] = [];
  title = 'Alimento';
  placeholder = 'Alimento';

  constructor(
    private optionService: OptionService,
  ) {
    // this.options = this.optionService.getMockOptions();
    this.optionService.getDbOptions().forEach(
      (document) => {
        document.forEach((elem) => {
          this.options.push({
            label: elem.name,
            value: elem.carbs
          })
        })
    })
  }

  getValue() {}
  
  onSelect(e: Event) {
    this.onSelectInput.emit(e)
  }
}
