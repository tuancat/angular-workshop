import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductServiceService) { }
  list;
  async ngOnInit() {
    console.log('reload data');
    this.reloadData();
  }

   reloadData() {
    this.productService.getProducts().subscribe(res => {
      this.list = res;
      res.forEach(value => {
        console.log("value:" +value.payload.doc.id);
      });
    });
  }

}
