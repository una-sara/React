import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  private uname       //用户名
  private upwd        //密码

  constructor(
    private url: UrlService, 
    private http: HttpClient
  ) { }

  doLogin(){
    //console.log(this.uname)
    //console.log(this.upwd)
    //向服务器发送异步的POST请求，验证登录信息
    // this.http.get('xx?k=v&k=v')
    let addr = this.url.loginApi   //请求地址
    let body = `uname=${this.uname}&upwd=${this.upwd}`
    let options = {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }
    this.http.post(addr, body, options).subscribe((res)=>{
      console.log(res)
    })
  }

  ngOnInit() {}

}
