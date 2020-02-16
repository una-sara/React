import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  //服务器的主机地址
  public host = 'http://www.codeboy.com/'
  //首页数据API地址
  public indexApi = this.host + 'data/product/index.php'
  //商品列表数据API地址
  public productListApi = this.host + 'data/product/list.php?pno='
  //商品详情数据API地址
  public productDetailApi = this.host + 'data/product/details.php?lid='
  //用户登录API地址
  public loginApi = this.host + 'data/user/login.php'
  //用户注册API地址
  public registerApi = this.host + 'data/user/register.php'

  constructor() { }
}
