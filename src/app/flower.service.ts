import { Injectable } from '@angular/core';
import { Flower } from './models/flower.model';
import { FLOWERS } from './flowers';

@Injectable()
export class FlowerService {

  constructor() { }

  getFlowers() {
    return FLOWERS;
  }

}
