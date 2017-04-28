import { Component, OnInit } from '@angular/core';
import { ProteinItemComponent } from '../protein-item/protein-item.component';
import { ProteinModel } from '../protein-item/protein-item.model';

@Component({
  selector: 'app-proteins-list',
  templateUrl: './proteins-list.component.html',
  styleUrls: ['./proteins-list.component.css']
})
export class ProteinsListComponent implements OnInit {

  proteins: ProteinModel[];
  maxScore: number;
  maxFdr: number;

  constructor() { 
    // NEED TO ABSTRACT MAX VALS INTO SHARED SERVICE
    this.maxScore = 1563;
    this.maxFdr = 6.201;

    // this.proteins = [
    //   new ProteinModel('protein 1', 129.231, 1.727),
    //   new ProteinModel('protein 2', 121.2378, 2.387),
    //   new ProteinModel('protein 3', 99.598423, 2.8001),
    //   new ProteinModel('protein 4', 70.99876, 2.9347),
    //   new ProteinModel('protein 5', 55.79263, 3.021),
    //   new ProteinModel('protein 6', 41.637848, 4.32398),
    //   new ProteinModel('protein 7', 37.26354, 5.25663),
    //   new ProteinModel('protein 8', 18.88887, 5.58238),
    //   new ProteinModel('protein 9', 1.003718, 6.16479)
    // ];

    this.proteins = [

    new ProteinModel('590240ec1654b0a5d42e6b12', '590240e91654b0a5d42e6b10', '590240ea1654b0a5d42e6b11', 'test/RCT_files/hit1.html', 1, 0, 'Ribonuclease A from bovine pancreas', 'KETAA...', 1562, 84, 74, 13681.322, 13690.247, 297, 44, 486, '<pre><…”,"__v: 0', ['590240ec1654b0a5d42e6b13','590240ec1654b0a5d42e6b17','590240ec1654b0a5d42e6b1c'], 1.727)
    ]
      
  }

  ngOnInit() {
  }

}
