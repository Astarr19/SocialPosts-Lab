import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-counter',
  templateUrl: './like-counter.component.html',
  styleUrls: ['./like-counter.component.css']
})
export class LikeCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  likes: number = 0;
  increase() {
    this.likes++;
  }
}
