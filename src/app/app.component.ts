import { Component } from '@angular/core';
import { StateInfo } from './services/service-map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mtv-map';
  isLeftVisible: boolean = true;
  state: StateInfo = null;
  constructor() { }

  ngOnInit(): void {
  }

  onChangeState($event) : void {
    console.log($event);
    this.state = $event;
    this.isLeftVisible = !this.isLeftVisible;
  }

  clickBack(): void {
    this.isLeftVisible = !this.isLeftVisible;
  }
}
