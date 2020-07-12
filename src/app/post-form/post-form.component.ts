import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string;
  thought: string;


  @Output() submitted = new EventEmitter<boolean>();
  submitPost = (f: NgForm) => {
    this.title = f.value.title;
    this.thought = f.value.thought;
    this.submitted.emit(true)
  }

}
