import { Injectable } from '@angular/core';
import { Flower } from './models/flower.model';
import { FLOWERS } from './flowers';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FlowerService {
  flowers: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.flowers = database.list('albums');
  }

  getFlowers() {
    return this.flowers;
  }

  getFlowerById(flowerId: number) {
    for (let i = 0; i < FLOWERS.length - 1; i++){
        if (FLOWERS[i].id === flowerId) {
          return FLOWERS[i];
        }
    }
  }

}
