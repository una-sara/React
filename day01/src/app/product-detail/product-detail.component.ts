import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  private product = { }  //要查询的商品信息
  //router: 路由器，用于路由跳转
  //route: 路由，表示当前激活的路由对象，用于读取地址路由参数
  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient, 
    private url: UrlService
  ) { }
  ngOnInit() {
    //组件初始化完成后，读取“当前路由”地址中的参数——要查询的商品的编号
    this.route.params.subscribe((data)=>{
      let pid = data.pid
      //根据商品编号请求该商品的详情
      this.http.get(this.url.productDetailApi + pid).subscribe((res:any)=>{
        console.log('获得到商品详情数据：')
        this.product = res.details
        console.log(this.product)
      })
    })
  }

}
