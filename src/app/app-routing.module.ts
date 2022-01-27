import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetriveFormComponent } from './retrive-form/retrive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {
    path:'template-form',
    component:TemplateFormComponent
  },
  {
    path:'retrive-form',
    component:RetriveFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
