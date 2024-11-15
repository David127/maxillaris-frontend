import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFileComponent } from './components/create-file/create-file.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { UpdateFileComponent } from './components/update-file/update-file.component';

const routes: Routes = [
  {
    path: '',
    component: FileListComponent
  },
  {
    path: 'create-file',
    component: CreateFileComponent
  },
  {
    path: ':id',
    component: UpdateFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
