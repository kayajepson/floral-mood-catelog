import { Component, OnInit } from '@angular/core';
import { Flower } from '../models/flower.model';
import { Router } from '@angular/router';
import { FlowerService } from '../flower.service';


@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css'],
  providers: [FlowerService]
})
export class FlowerListComponent implements OnInit {
  flowers: Flower[];

  constructor(private router: Router, private flowerService: FlowerService) { }

  ngOnInit() {
    this.flowers = this.flowerService.getFlowers();
  }



  goToDetailPage(clickedFlower: Flower) {
    this.router.navigate(['details', clickedFlower.id])
  }

}
