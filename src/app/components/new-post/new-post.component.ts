import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService, private route: Router) { }

  ngOnInit() {
  }

  save(form:NgForm){
    const title = form.value['title'];
    const content = form.value['content'];
    this.postService.addPost(new Post(title, content, 0, new Date()));
    this.postService.getAllPosts();
    this.route.navigate(['/posts']);
  }

}
