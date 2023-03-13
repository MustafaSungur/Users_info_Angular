import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user-register/user-register.component';
const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'togglePage' } },
  {
    path: 'register',
    component: UserRegisterComponent,
    data: { animation: 'statusPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
