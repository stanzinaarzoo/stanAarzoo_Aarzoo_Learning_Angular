import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { ProductListComponent } from './app/product-list/product-list.component';
import { ModifiedProductComponent } from './app/modified-product/modified-product.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // default route
  { path: 'products', component: ProductListComponent },
  { path: 'modified-Product', component: ModifiedProductComponent },
  { path: '**', component: PageNotFoundComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
