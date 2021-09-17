import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {PostService, IPost} from '../../post-service/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  public form!: FormGroup;
  public post: IPost;
  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService, private fb: FormBuilder
  ) {
    this.post = {
      'id' : '',
      'title': '',
      'body':''
    };
  }

  ngOnInit(): void {
    
    this.postService.getPostById(this.route.snapshot.params['postId']).subscribe((res:any) => {
      this.post = res.payload.data()
    });
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }
  
  get f(){
    return this.form.controls;
  }
  updateEmployee(): void {
    this.postService.updatePost(this.route.snapshot.params['postId'], this.form.value).then((res:any) => {
      this.router.navigateByUrl('post/list');
    });
  }

}
