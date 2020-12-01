import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {
  @Input() idChair: any;
  constructor() { }

  ngOnInit(): void {
  }

choiceChair (idChair){
  const index = this.idChair.findIndex((item)=> {
    item.maGhe === idChair
  })
  idChair[index].daDat = true;
}

}
