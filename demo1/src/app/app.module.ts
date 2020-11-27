import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes, PreloadAllModules, Route} from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SelectivePreloadService } from './selective-preload.service';
import { ReportComponent } from './report/report.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserModifyComponent } from './user-modify/user-modify.component';
import {TableService} from './user/service/table.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { ProductComponent } from './product/product.component';
import { CreateProductComponent } from './create-product/create-product.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    component: UserListComponent,
  },
  {
    path: 'user-detail',
    component: UserModifyComponent,
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product-new',
    component: CreateProductComponent
  }
];
//
// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'login',
//     pathMatch: 'full'
//   },
//   {
//     path: 'user',
//     loadChildren: './user/user.module#UserModule',
//     data: {
//       preload: true
//     },
//     canActivate: [LoginRouteService]
//   },
//   { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
//   {
//     path: 'setting',
//     loadChildren: './setting/setting.module#SettingModule',
//   },
//   {
//     path: 'report',
//     component: ReportComponent,
//     outlet: 'report'
//   },
//   {
//     path: 'login',
//     component: LoginComponent,
//     canDeactivate: [UnsavedGuardService],
//     resolve: {
//       data: ResolveService
//     }
//   },
//   {
//     path: '**',
//     component: PageNotFoundComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    ReportComponent,
    UserListComponent,
    UserModifyComponent,
    ProductComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      enableTracing: false, // debugging only
      preloadingStrategy: SelectivePreloadService
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
  ],
  providers: [
    TableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
