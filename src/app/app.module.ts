import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule} from '@angular/forms' 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { ListPostComponent } from './pages/list-post/list-post.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomFilterPipe } from './custom-filter/custom-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    ViewPostComponent,
    EditPostComponent,
    ListPostComponent,
    CustomFilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
