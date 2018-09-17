import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  constructor(private postService:PostService) { }

  @Input() item: Post;
  @Input() index: number;

  ngOnInit() {
  }

  delete(){
    this.postService.deletePost(this.item, this.index);
    this.postService.getAllPosts();
  }

  loveIt(){
    this.postService.loveIts(this.index);
    this.postService.getAllPosts();
  }
  
  dontLoveIt(){
    this.postService.dontLoveIts(this.index);
    this.postService.getAllPosts();
  }

}
