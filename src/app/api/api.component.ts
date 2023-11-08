import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  posts: Post[] = [];

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.exampleService.getPosts().subscribe((posts) => {
      this.posts = posts.slice(0, 20);
    });
  }
}
