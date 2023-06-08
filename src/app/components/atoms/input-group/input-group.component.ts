import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent {

  @Input() group_index: any
  @Output() onClickInput = new EventEmitter<any>();
  @Output() onInput = new EventEmitter<any>();

  carbs_percent = ''
  faPencil = faPencil;

  onClick(i: number) {
    this.onClickInput.emit(i);
  }

  onClickEdit(i: number) {
    
  }

  onInputEvent(event: Event, group_index: number, key: string) {
    if (key == 'carbs') {
      this.carbs_percent = (event.target as HTMLInputElement).value
    }
    this.onInput.emit({
      value: (event.target as HTMLInputElement).value, 
      group_index,
      key
    })
  } 

}
