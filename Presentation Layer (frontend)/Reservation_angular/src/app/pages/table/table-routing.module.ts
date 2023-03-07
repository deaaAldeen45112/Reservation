import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTableComponent } from './add-table/add-table.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { GetTablesComponent } from './get-tables/get-tables.component';

const routes: Routes = [
  {
    path:'GetTable',
    component:GetTablesComponent
  },
  {
    path:'AddTable',
    component:AddTableComponent
  },
  {
    path:'EditTable/:id',
    component:EditTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
