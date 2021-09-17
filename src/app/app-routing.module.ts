import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostComponent } from './pages/list-post/list-post.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'post/list' , pathMatch: 'full'},
  { path: 'post/list', component : ListPostComponent },
  { path: 'post/create', component: CreatePostComponent },
  { path: 'post/:postId/view', component : ViewPostComponent },
  { path: 'post/:postId/edit', component: EditPostComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
