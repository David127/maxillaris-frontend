import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IFileDto } from 'src/app/models/mant.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.scss']
})
export class CreateFileComponent {

  newFile: IFileDto = {
    peso: 0,
    tipo: '',
    cantidad: 0
  }

  apiService = inject(ApiService);
  router = inject(Router);

  onSelect(e: Event) {
    const { files } = (e.target as HTMLInputElement);
    if (files) {
      const { size, type } = files[0];
      this.newFile.peso = size;
      this.newFile.tipo = type;
      this.newFile.cantidad = 1;

      this.apiService.saveFile(this.newFile)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

}
