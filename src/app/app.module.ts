import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFileComponent } from './components/create-file/create-file.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { UpdateFileComponent } from './components/update-file/update-file.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFileComponent,
    FileListComponent,
    UpdateFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
