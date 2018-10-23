import { Component, OnInit } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { ProductModel } from '../domain/product-model';

@Component({
  selector: 'app-productist',
  templateUrl: './productist.component.html',
  styleUrls: ['./productist.component.css']
})
export class ProductistComponent implements OnInit {
  data: IProduct[];
// data: ProductModel[];

  constructor() { }

  ngOnInit() {

   // this.data = [new ProductModel('P100', 'Cafe', 15 , 'boisson')];
   this.data = [{'code': 'P100', 'title': 'Cafe', 'unitPrice': 1.5},
   {'code': 'P200', 'title': 'chocolat', 'unitPrice': 2.5},
   {'code': 'P300', 'title': 'the', 'unitPrice': 3.2},
   {'code': 'P400', 'title': 'Gateaux', 'unitPrice': 5}];
  }

}
