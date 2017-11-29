import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";
import { StarComponent } from './shared/star.component';
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
