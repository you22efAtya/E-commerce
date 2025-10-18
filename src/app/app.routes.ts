import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { ProductsComponent } from './layout/pages/products/products.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { NotFoundComponent } from './layout/additions/not-found/not-found.component';
import { authGuard } from './shared/guards/auth.guard';
import { ForgetPasswordComponent } from './layout/pages/forgetPassword/forget-password/forget-password.component';
import { ProductDetailsComponent } from './layout/pages/product-details/product-details.component';
import { CheckoutComponent } from './layout/pages/checkout/checkout.component';
import { WishListComponent } from './layout/pages/wish-list/wish-list.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: "Home"},
    {path: 'login', component: LoginComponent,title: "Login"},
    {path: 'register', component: RegisterComponent,title: "Register"},
    {path: 'product', component: ProductsComponent,title: "Products"},
    {path: 'brands', component: BrandsComponent,title: "Brands"},
    {path: 'categories', component: CategoriesComponent,title: "Categories"},
    {path: 'cart', component: CartComponent,title: "Cart"},
    {path: 'forget-password', component: ForgetPasswordComponent, title: "Forget Password"},
    {path: 'wishList', component: WishListComponent, title: "Wish List"},
    {path: 'product-details/:pid', component:ProductDetailsComponent, title: "Product Details"},
    {path: 'checkout/:id', component:CheckoutComponent, title: "Checkout"},
    {path: '**', component: NotFoundComponent, title: "Not Found"} 
];
