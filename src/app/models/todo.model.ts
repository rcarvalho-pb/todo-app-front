export interface Todo {
  id: number;
  name: string;
  description: string;
  status: string;
  active: boolean;
  createdAt?: Date;
  lastModifiedDate?: Date;
}
