import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Post} from '../app.component'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() posts: Post[];
  total: number[] = [];

  @Output() deleted = new EventEmitter<object>();
  deletePost = (el: Post): void => this.deleted.emit(el);
  
}
