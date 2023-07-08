import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { InputGroupValues } from 'src/app/entities/input-group-values';
import { FoodOptionService } from 'src/app/services/food-option.service';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss'],
})
export class InputGroupComponent {
  @Input() group_index: any;
  @Output() onClickInput = new EventEmitter<any>();
  @Output() onClickEditInput = new EventEmitter<any>();
  @Output() onInput = new EventEmitter<any>();

  input_values: InputGroupValues = {}
  faPencil = faPencil;

  constructor(
    private foodOptionService: FoodOptionService
  ) {}

  onClick(i: number) {
    this.onClickInput.emit(i);
  }

  onClickEdit(i: number) {
    this.onClickEditInput.emit(i);
  }

  onSelectEvent(event: any) {

    this.foodOptionService.getFood(event.value).subscribe((data: any) => {
      this.input_values['id'] = data.id
      this.input_values['carbs'] = data.carbs
      this.input_values['food'] = event.label;
      this.emitOnEvent(this.group_index)
    })
  }

  onInputEvent(event: Event, group_index: number) {
    let id: string  = (event.target as HTMLInputElement).id
    this.input_values[id] = (event.target as HTMLInputElement).value
    this.emitOnEvent(group_index)
  } 

  emitOnEvent(group_index: number): void{
    this.onInput.emit({
      group_index,
      input_values: this.input_values,
    });
  }

}
