import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private pno = 0           //即将要加载数据的页号
  private productList = []  //商品列表
  private hasMore = true    //还有更多数据可供加载吗？
  
  @ViewChild('myInfiniteScroll', {static:false})
  private myInfiniteScroll:IonInfiniteScroll

  //使用“导航控制器”可以跳转到历史记录中的页面
  constructor(private nav: NavController, private http: HttpClient, private url: UrlService) { }

  ngOnInit() {
    //组件初始化完成后，第一次加载商品数据
    this.loadData()
  }
  //加载下一页的商品数据
  loadData(){
    this.pno++
    this.http.get(this.url.productListApi + this.pno).subscribe((res:any)=>{
      if(this.pno>=res.pageCount){
        //当前页号已经大于等于总页数
        this.hasMore = false 
      }
      this.productList = this.productList.concat(res.data)
      //console.log(this.productList)
      //通知无限滚动组件：数据加载完成
      this.myInfiniteScroll.complete();
    })
  }

  goBack(){
    //返回到历史记录中的上一个页面
    this.nav.back()
  }

}
