import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MainComponent } from './main/main.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImgUrlPipe } from './img-url.pipe'

//创建路由词典
const routes = [
  {path:'', redirectTo: 'index', pathMatch:'full'},
  {path:'index', component:IndexComponent },
  {path:'product-list', component:ProductListComponent },
  {path:'product-detail/:pid', component:ProductDetailComponent },
  {path:'cart', component:CartComponent },
  {path:'user-login', component:UserLoginComponent },
  {path:'**', component:NotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,          //主界面组件
    IndexComponent,         //首页组件
    ProductListComponent,   //商品列表组件
    ProductDetailComponent, //商品详情组件
    CartComponent,          //购物车组件
    UserLoginComponent,     //用户登录组件
    NotFoundComponent,      //待访问页面不存在组件
    ImgUrlPipe,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,                //包含ngFor/ngIf...
    IonicModule.forRoot(),        //包含ion-xxx
    RouterModule.forRoot(routes), //注册路由模块
    FormsModule,                  //包含ngModel
    HttpClientModule,             //包含HttpClient
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
