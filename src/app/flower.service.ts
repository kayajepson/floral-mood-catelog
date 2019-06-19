import { Injectable } from '@angular/core';
import { Flower } from './models/flower.model';
import { FLOWERS } from './flowers';

@Injectable()
export class FlowerService {

  constructor() { }

  getFlowers() {
    return FLOWERS;
  }

  getFlowerById(flowerId: number) {
    for (let i = 0; i < FLOWERS.length - 1; i++){
        if (FLOWERS[i].id === flowerId) {
          return FLOWERS[i];
        }
    }
  }

}
