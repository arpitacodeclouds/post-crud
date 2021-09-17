import { Component, OnInit } from '@angular/core';
import {PostService, IPost} from '../../post-service/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  post: IPost;
  constructor(public postService: PostService, private route: ActivatedRoute, private router: Router) { 
    this.post = {
      'id' : '',
      'title': '',
      'body':''
    };
  }

  ngOnInit(): void {
    this.postService.getPostById(this.route.snapshot.params['postId']).subscribe((res:any) => {
      this.post = res.payload.data()
      this.post.id = this.route.snapshot.params['postId'];
    });
    
  }

}
