import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { NewPostComponent } from './components/new-post/new-post.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent},
  { path: '', redirectTo:'/posts',  pathMatch: 'full'},
  { path: 'new', component: NewPostComponent},
  { path: '**', redirectTo: '/posts' }
];
export const routing = RouterModule.forRoot(appRoutes);