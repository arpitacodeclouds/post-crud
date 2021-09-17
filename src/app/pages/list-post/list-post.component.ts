import { Component, OnInit } from '@angular/core';
import {PostService, IPost} from '../../post-service/post.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  
  public postList: IPost[] = [];
  public form!: FormGroup;
  curr_page: number = 1;
  pcount: number = 5;
  total_items: number = 0;
  search_post = '';
  constructor(private fb: FormBuilder, private postService: PostService){
  };

  ngOnInit() {
    this.getPosts();
  }
  getPosts(){
    this.postService.getAllPost().subscribe((res:any) => {
      this.postList = res.map((post:any) => {
        return {
          ...(post.payload.doc.data() as object),
          id: post.payload.doc.id
        } as IPost;
      });
    });
    this.total_items = this.postList.length;
  }
  addPost(): void {
    this.postService.addPost(this.form.value).then();
  }


  deletePost(postId: string): void {
    this.postService.deletePost(postId).then();
  }
}
