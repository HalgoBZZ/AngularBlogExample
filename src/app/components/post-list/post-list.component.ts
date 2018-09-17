import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  private list = [];
  postsSubscription: Subscription;

  constructor(private postService:PostService) { }
  

  ngOnInit() {
    this.postsSubscription = this.postService.subjectPosts.subscribe(
      (posts: any[]) => {
        this.list = posts;
      }
    );
    this.postService.getAllPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
