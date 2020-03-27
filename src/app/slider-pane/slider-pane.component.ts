import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

type PaneType = 'left' | 'right';

@Component({
  selector: 'my-slider-pane',
  templateUrl: './slider-pane.component.html',
  styleUrls: ['./slider-pane.component.scss'],
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
  ])]
})
export class SliderPaneComponent implements OnInit {
  @Input('activePane') activePane: PaneType = 'left';
  constructor() { }

  ngOnInit(): void {
  }

}
