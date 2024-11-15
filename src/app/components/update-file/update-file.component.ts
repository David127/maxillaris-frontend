import { inject, Component } from '@angular/core';
import { IFile } from 'src/app/models/mant.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-update-file',
  templateUrl: './update-file.component.html',
  styleUrls: ['./update-file.component.scss']
})
export class UpdateFileComponent {

  files: IFile[] = [];
  file: IFile = {
    id: 0,
    peso: 0,
    tipo: '',
    cantidad: 0,
    updatedAt: new Date(),
    createdAt: new Date()
  }

  form!: FormGroup;
  formBuilder = inject(FormBuilder);
  apiService = inject(ApiService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() {
    this.setFileFromLocalStorage();
    this.buildForm();
    this.form.get('id')?.disable();
  }

  private setFileFromLocalStorage(): void {
    this.route.paramMap
    .subscribe((paramMap: ParamMap) => {
      const idFile = paramMap.get('id');
      const filesLS = localStorage.getItem('files');
      if (!filesLS || !idFile) {
        return;
      }
      this.files = JSON.parse(filesLS);
      const fileFound = this.files.find(({ id }) => String(id) === idFile);
      if (!fileFound) {
        return;
      }
      this.file = fileFound;
    });
  }

  private buildForm(): void {
    const { id, peso, tipo, cantidad } = this.file;
    this.form = this.formBuilder.group({
      id: [id],
      peso: [peso, Validators.required],
      tipo: [tipo, Validators.required],
      cantidad: [cantidad, Validators.required]
    });
  }

  updateFile(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      this.apiService.updateFile(this.file.id, this.form.value)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

}
