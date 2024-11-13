import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { ProductListComponent } from './app/product-list/product-list.component';
import { ModifiedProductComponent } from './app/modified-product/modified-product.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {InMemoryDataService} from "./app/services/in-memory-data.service";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // default route
  { path: 'products', component: ProductListComponent },  // eagerly loaded
  {path: 'products/:id',
     loadComponent: () =>
       import('./app/product-list/product-list.component').then (m=> m.ProductListComponent)}, //lazy loading
  { path: 'modified-product',
        loadComponent: () =>
          import('./app/modified-product/modified-product.component').then (m=> m.ModifiedProductComponent) },
  { path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 10 })) // Import providers dynamically
  ],
}).catch((err) => console.error(err));
