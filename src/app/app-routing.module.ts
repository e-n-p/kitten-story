import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListKittenComponent } from './list-kitten/app-list-kitten.component';
import { UserKittenComponent } from './user-kitten/app-user-kitten.component';
import { CreateKittenComponent } from './create-kitten/app-create-kitten.component';

const routes: Routes = [
  {path: '', component: ListKittenComponent},
  {path: 'user', component: UserKittenComponent},
  {path: 'create', component: CreateKittenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
