import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTestimonailComponent } from './add-testimonail/add-testimonail.component';
import { EditTestimonailComponent } from './edit-testimonail/edit-testimonail.component';
import { GetlistTestimonailComponent } from './getlist-testimonail/getlist-testimonail.component';
import { ShowTestimonailComponent } from './show-testimonail/show-testimonail.component';

const routes: Routes = [

  {
    path: 'list'
    ,
    component: GetlistTestimonailComponent
  },
  {
    path: 'show/:id',
    component: ShowTestimonailComponent
  },
  {
    path: 'edit/:id',
    component: EditTestimonailComponent
  }
  , {
    path: 'add'
    , component: AddTestimonailComponent
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesimonalRoutingModule { }
