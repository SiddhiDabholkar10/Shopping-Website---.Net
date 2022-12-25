import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { CompareComponent } from './compare/compare.component';
import { CartComponent } from './cart/cart.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { RetailerRegisterComponent } from './retailer-register/retailer-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RetailerlistComponent } from './retailerlist/retailerlist.component';
import { RetailerRequestsComponent } from './retailer-requests/retailer-requests.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RetailernewpassComponent } from './retailernewpass/retailernewpass.component';
import { UsernewpassComponent } from './usernewpass/usernewpass.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-desc/:id', component: ProductDescComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'cart/:id', component: CartComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'login', component: UserloginComponent },
  { path: 'newpassUser', component: UsernewpassComponent},
  { path: 'newpassRetailer', component: RetailernewpassComponent},

  { path: 'signupUser', component: UsersignupComponent },
  { path: 'signupRetailer', component: RetailerRegisterComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'user/wishlist/:id', component: WishlistComponent },
  { path: 'user/my-orders/:id', component: MyOrdersComponent },
  { path: 'retailer', component: RetailerProfileComponent },
  { path: 'retailer/my-products/:id', component: ProductlistComponent },
  { path: 'retailer/my-products/add-product/:id', component: AddproductComponent },
  
  {
    path: 'retailer/my-products/edit-product/:id',
    component: EditproductComponent,
  },
  { path: 'admin', component: RetailerlistComponent },
  { path: 'admin/retailer-requests', component: RetailerRequestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
