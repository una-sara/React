import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  private carouselItems = []    //轮播广告项
  private newArrivalItems = []  //新品上市项
  private recommendedItems = [] //首页推荐项
  private topSaleItems = []     //热销单品项

  //依赖注入两个服务对象：Url地址访问，Http请求服务
  constructor(private url: UrlService, private http: HttpClient) { }

  ngOnInit() {
    //组件初始化完成，异步请求首页商品数据
    this.http.get(this.url.indexApi).subscribe((res:any)=>{
      //console.log('得到首页商品数据：')
      //console.log(res)
      this.carouselItems = res.carouselItems
      this.newArrivalItems = res.newArrivalItems
      this.recommendedItems = res.recommendedItems
      this.topSaleItems = res.topSaleItems
      //TODO: 启动轮播广告的自动播放
    })
  }

}
