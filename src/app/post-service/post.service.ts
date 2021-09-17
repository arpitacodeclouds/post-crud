import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private firestore: AngularFirestore) {
  }

  getAllPost(){
    return this.firestore.collection("blog").snapshotChanges();
  }
  getPostById(postId: string){
    return this.firestore.doc("blog/" + postId).snapshotChanges();
  }
  addPost(payload: IPost) {
    return this.firestore.collection('blog').add(payload);
  }
  updatePost(postId: string, payload: IPost) {
    return this.firestore.doc('blog/' + postId).update(payload);
  }

  deletePost(postId: string) {
    return this.firestore.doc('blog/' + postId).delete();
  }
}

export interface IPost {
  id: string;
  title: string;
  body: string;
}
