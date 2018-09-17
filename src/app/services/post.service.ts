import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostService {

  posts: Array<Post> = [
    new Post("Mon premier post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", 0, new Date()),
    new Post("Mon deuxiéme post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", 0, new Date()),
    new Post("Encore un post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", 0, new Date())
  ];
  subjectPosts = new Subject<any[]>();

  constructor() { }

  getAllPosts() {
    this.subjectPosts.next(this.posts.slice());
  }

  deletePost(post:Post, index:number) {
    for(let i=index; i<this.posts.length;i++) {
      this.posts[i] = this.posts[i+1];
    }
    this.posts[this.posts.length-1]=null;
    this.getAllPosts();
  }

  addPost(post:Post) {
    this.posts[this.posts.length+1] = post;
    this.getAllPosts();
  }

  loveIts(index:number) {
    this.posts[index].loveIts++;
    this.getAllPosts();
  }

  dontLoveIts(index:number) {
    this.posts[index].loveIts--;
    this.getAllPosts();
  }
}
