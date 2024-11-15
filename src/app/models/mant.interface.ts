export interface IFile {
  id:         number;
  peso:       number;
  tipo:       string;
  cantidad:   number;
  updatedAt:  Date;
  createdAt:  Date;
}

export interface IFileDto extends Omit<IFile, 'id' | 'updatedAt' | 'createdAt'> {}

export interface ITotalFile {
  peso_total:       number;
  cantidad_total:   string;
}
