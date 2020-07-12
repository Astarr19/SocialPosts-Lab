import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../app.component'
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formDisplay: boolean = false;

  posts: Post[] = [
    {title:'Angular is rough', thought: 'Angular is rough but it isn\'t too bad'},
    {title:'Only two', thought: 'I\'m only making two premade posts'}
  ]
  
  onDelete = (el) => this.posts.splice(this.posts.indexOf(el), 1);
  onSubmit = () => {
    this.formDisplay = true;
  }
}
