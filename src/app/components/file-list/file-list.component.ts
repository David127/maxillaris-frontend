import { Component, inject } from '@angular/core';
import { switchMap } from 'rxjs';
import { IFile, ITotalFile } from 'src/app/models/mant.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent {

  files: IFile[] = [];
  total: ITotalFile = {
    peso_total: 0,
    cantidad_total: ''
  }

  apiService = inject(ApiService);

  ngOnInit(): void {
    this.getFiles();
    this.getTotals();
  }

  private getTotals(): void {
    this.apiService.getTotals()
    .subscribe(response => {
      this.total = response;
    });
  }

  private getFiles(): void {
    this.apiService.getFiles()
      .subscribe(response => {
        this.files = response
        localStorage.setItem('files', JSON.stringify(this.files));
      });
  }
  
  deleteFile(id: number): void {
    this.apiService.deleteFile(id)
    .pipe(
      switchMap(() => {
        return this.apiService.getFiles();
      })
    )
      .subscribe(response => {
        this.files = response
        localStorage.setItem('files', JSON.stringify(this.files));
      });
  }

}
