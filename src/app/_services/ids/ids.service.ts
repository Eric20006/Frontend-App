//Important to identify the different ids in conponent list


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IdsService {
  specificIDs: string[];

  constructor() {
    this.specificIDs = ['homework', 'schedule', 'examens', 'all'];
   }
}
