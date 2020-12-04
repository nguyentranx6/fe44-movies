import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css'],
})
export class ChairComponent implements OnInit {
  @Input() idChair: any;
  @Output() listBooking = new EventEmitter<any[]>();

  constructor() {}

  ngOnInit(): void {}

  choiceChair(idChair: any) {
    this.idChair.daDat = !this.idChair.daDat;
    this.listBooking.emit(idChair);
  }
}
