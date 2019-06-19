import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Flower } from '../models/flower.model';
import { FlowerService } from '../flower.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-flower-detail',
  templateUrl: './flower-detail.component.html',
  styleUrls: ['./flower-detail.component.css'],
  providers: [FlowerService]
})
export class FlowerDetailComponent implements OnInit {
  flowerId: string = null;
  flowerToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private flowerService: FlowerService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.flowerId = urlParameters['id'];
    });
    this.flowerToDisplay = this.flowerService.getFlowerById(this.flowerId);
  }

}
