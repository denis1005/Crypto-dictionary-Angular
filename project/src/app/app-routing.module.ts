import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:MainComponent,
    data:{
      title:'Home',
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
