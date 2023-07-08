import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  @Output() onCloseInput = new EventEmitter<any>();
  @Input() showPopup: boolean = false

  onClose(): void {
    this.onCloseInput.emit()
  }
    
}
