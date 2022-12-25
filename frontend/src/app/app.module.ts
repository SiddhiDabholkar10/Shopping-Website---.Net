import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { RetailerRegisterComponent } from './retailer-register/retailer-register.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RetailerlistComponent } from './retailerlist/retailerlist.component';
import { RetailerRequestsComponent } from './retailer-requests/retailer-requests.component';
import { ProductsComponent } from './products/products.component';
import { CompareComponent } from './compare/compare.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { UsernewpassComponent } from './usernewpass/usernewpass.component';
import { RetailernewpassComponent } from './retailernewpass/retailernewpass.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSelectModule } from '@angular/material/select';
import { Md5 } from 'md5-typescript';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserProfileComponent,
    RetailerProfileComponent,
    UserloginComponent,
    UsersignupComponent,
    RetailerRegisterComponent,
    AddproductComponent,
    EditproductComponent,
    ProductlistComponent,
    RetailerlistComponent,
    RetailerRequestsComponent,
    ProductsComponent,
    CompareComponent,
    SearchResultsComponent,
    MyOrdersComponent,
    WishlistComponent,
    UsernewpassComponent,
   RetailernewpassComponent,
   CartComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
