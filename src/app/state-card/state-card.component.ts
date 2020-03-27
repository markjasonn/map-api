import { Component, OnInit, Input } from '@angular/core';
import { StateInfo } from '../services/service-map.service';

@Component({
  selector: 'app-state-card',
  templateUrl: './state-card.component.html',
  styleUrls: ['./state-card.component.scss']
})
export class StateCardComponent implements OnInit {

  @Input('state')
  state: StateInfo;

  constructor() { }

  ngOnInit(): void {

  }

  onClickCounty(countyName:string): void {
    alert(countyName);
  }
}
