import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSuperHeroesComponent } from './super-heroes/add-super-heroes/add-super-heroes.component';
import { AllSuperHeroesComponent } from './super-heroes/all-super-heroes/all-super-heroes.component';
import { EditSuperHeroesComponent } from './super-heroes/edit-super-heroes/edit-super-heroes.component';

const routes: Routes = [{
  path: '',
  component: AllSuperHeroesComponent,
},{
  path:'add-super-hero',
  component: AddSuperHeroesComponent,
},
{
  path: 'edit-super-hero/:id',
  component: EditSuperHeroesComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
