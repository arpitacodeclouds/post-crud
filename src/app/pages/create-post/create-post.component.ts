import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../../post-service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  // public form!: FormGroup;
  public form: FormGroup = new FormGroup({ });
  constructor(private fb: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }
  get fc(){
    return this.form.controls;
  }
  addPost() {
    this.postService.addPost(this.form.value).then((data) => {

      this.router.navigateByUrl('post/list');
    });
  }
}
