import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations'
@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('changeState', [
      state('state1', style({
        opacity: 0
      })),
      state('state2', style({
        backgroundColor: 'black',
        opacity: .3
      })),
      transition('*=>state1', animate('500ms')),
      transition('*=>state2', animate('500ms'))

    ])
  ]
})
export class AnimateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() currentState: string;

}
