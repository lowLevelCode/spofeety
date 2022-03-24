import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-options',
  templateUrl: './btn-options.component.html',
  styleUrls: ['./btn-options.component.scss']
})
export class BtnOptionsComponent implements OnInit {

  @Output() nextEvent = new EventEmitter<void>();
  @Output() previousEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onNext() {
    this.nextEvent.emit();
  }

  onPrev() {
    this.previousEvent.emit()
  }
}
