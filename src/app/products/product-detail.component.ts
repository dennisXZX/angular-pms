import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    const id = parseInt(this._route.snapshot.paramMap.get('id'), 10);
    this.pageTitle += `: ${id}`;

  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
