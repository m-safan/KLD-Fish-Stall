import { Injectable } from '@angular/core';

@Injectable()
export class SharedModelService {

  public UserRole: string;

  constructor() {
    this.UserRole = 'admin';
  }

}
