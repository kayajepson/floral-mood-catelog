import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Flower } from '../models/flower.model';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-flower-detail',
  templateUrl: './flower-detail.component.html',
  styleUrls: ['./flower-detail.component.css'],
  providers: [FlowerService]
})
export class FlowerDetailComponent implements OnInit {
  flowerId: number = null;
  flowerToDisplay: Flower;

  constructor(private route: ActivatedRoute, private location: Location, private flowerService: FlowerService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.flowerId = parseInt(urlParameters['id']);
    });
    this.flowerToDisplay = this.flowerService.getFlowerById(this.flowerId);
  }

}
