import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFileDto, IFile, ITotalFile } from '../models/mant.interface';

const API_URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient);

  getFiles(): Observable<IFile[]> {
    return this.http.get<IFile[]>(`${API_URL}/files`);
  }

  saveFile(dto: IFileDto): Observable<IFile> {
    return this.http.post<IFile>(`${API_URL}/files`, dto);
  }

  updateFile(id: number, dto: IFileDto) {
    return this.http.put(`${API_URL}/files/${id}`, dto);
  }

  deleteFile(id: number) {
    return this.http.delete(`${API_URL}/files/${id}`);
  }

  getTotals(): Observable<ITotalFile> {
    return this.http.get<ITotalFile>(`${API_URL}/files/totals`);
  }
}
