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
  { path: 'products', component: ProductListComponent },
  { path: 'modifiedProduct', component: ModifiedProductComponent },
  { path: '**', component: PageNotFoundComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 10 })) // Import providers dynamically
  ],
}).catch((err) => console.error(err));
