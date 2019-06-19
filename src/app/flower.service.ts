import { Injectable } from '@angular/core';
import { Flower } from './models/flower.model';
import { FLOWERS } from './flowers';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FlowerService {
  flowers: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.flowers = database.list('flowers');
  }

  getFlowers() {
    return this.flowers;
  }

  addFlower(newFlower: Album) {
    this.flowers.push(newFlower);
  }

  getFlowerById(flowerId: number) {
    return this.database.object('flowers/' + flowerId);
  }

}
