import { Component, OnInit } from "@angular/core";

import { IProduct } from "./product";
import { ProductService } from './product.service';

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 5;
  showImage: boolean = false;
  errorMessage: string = '';

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ?
                            this.performFilter(this.listFilter) :
                            this.products;
  }

  filteredProducts: IProduct[];

  products: IProduct[] = [];

  constructor(private _productService: ProductService) {
    this.listFilter = '';
  }

  performFilter(filterBy: string): IProduct[] {
    // change the filter keyword to lowercase
    filterBy = filterBy.toLocaleLowerCase();

    // return a filtered IProduct array
    return this.products.filter((product: IProduct) => {
      return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `This product is ${message} stars`;
  }

  ngOnInit(): void {
    // load products from service
    this._productService.getProducts()
        .subscribe(
          products => {
            this.products = products;
            this.filteredProducts = this.products;
          },
          error => {
            this.errorMessage = <any>error;
          }
        );


  }
}
