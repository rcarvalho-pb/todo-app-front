import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos(): Todo[] {
    return [
      {
        id: 1,
        name: 'Teste 01',
        description: 'Description teste 01',
        status: 'TO DO',
        active: true,
      },
      {
        id: 6,
        name: 'Teste 06',
        description: 'Description teste 06',
        status: 'TO DO',
        active: true,
      },
      {
        id: 2,
        name: 'Teste 02',
        description: 'Description teste 02',
        status: 'DOING',
        active: true,
      },
      {
        id: 3,
        name: 'Teste 03',
        description: 'Description teste 03',
        status: 'DONE',
        active: true,
      },
      {
        id: 4,
        name: 'Teste 04',
        description: 'Description teste 04',
        status: 'TO DO',
        active: true,
      },
    ];
  }
}
