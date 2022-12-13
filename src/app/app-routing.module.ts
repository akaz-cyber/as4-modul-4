import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { ListcarsComponent } from './listcars/listcars.component';

const routes: Routes = [
{
  path:'detail',
  component:CarDetailComponent
},
{
  path:'list',
  component:ListcarsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
