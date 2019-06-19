import { Component, OnInit } from '@angular/core';
import { Flower } from '../models/flower.model';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FlowerService]
})
export class AdminComponent implements OnInit {

  constructor(private flowerService: FlowerService) { }

  ngOnInit() {
  }

  submitForm(name: string, color: string, mood: string, image: string, season: string) {
    let seasonArray: Array<string> = season.split(", ");
    var newFlower: Flower = new Flower(name, color, mood, image, seasonArray);
    this.flowerService.addFlower(newFlower);
  }
}
