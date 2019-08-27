import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { resolve } from 'url';
import { UserResolverService } from './user-resolver.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users/:id', component: UserComponent, resolve: {user: UserResolverService}},
  {path: 'posts/:id', component: PostComponent},
  {path: '**', redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
