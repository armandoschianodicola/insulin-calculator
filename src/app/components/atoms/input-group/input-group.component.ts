import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent {

  @Input() group_index: any
  @Output() onClickInput = new EventEmitter<any>();

  carbs_percent = 0

  onClick(i: number) {
    this.onClickInput.emit(i);
  }

  onSelect(e: {value:number}) {
    this.carbs_percent = e.value
  }

}
