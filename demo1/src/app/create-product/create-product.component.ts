import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: any = {};

  constructor(public productService: ProductServiceService,  private router: Router) {
  }

  ngOnInit() {
  }

  saveProduct() {
    this.productService.createProduct(this.product);
    this.router.navigate(['/product']);
  }
}
