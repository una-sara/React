import { Component, ViewChild, OnInit } from '@angular/core';

import { Platform, IonSlides, IonInfiniteScroll, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
  doQuit(){
    //使用“警告框控制器”创建警告框
    this.alertController.create({
      header: '确认退出',
      message: '您确认要退出吗？',
      buttons: ['确认', '取消']
    }).then((myAlert)=>{
      //让异步创建出来的对话框呈现出来
      myAlert.present() 
    })
  }


  /*private list = [8323, 3241, 3821, 9877, 8233, 8711, 9213, 8761, 8631,7652]

  @ViewChild('myScroll', {static: true})
  private myInfiniteScroll:IonInfiniteScroll

  loadMore(){
    console.log('正在加载更多数据...')
    //TODO: 此次应该发送异步XHR请求，获取服务器端数据
    //此次使用定时器模拟：3s后获得了更多的数据
    setTimeout(()=>{
      for(let i=0; i<10; i++){
        let n = Math.floor(Math.random()*9000 + 1000)
        this.list.push(n)
      }
      //通知“无限滚动组件”：数据已经加载完成——否则永远不会再次加载！
      this.myInfiniteScroll.complete()
    }, 3000)
  }*/


  //@ViewChild('myAd3', {static: true})
  //private mySlide3:IonSlides
  ngOnInit(){
    //组件初始化完成，让轮播广告“开始自动播放”
    //this.mySlide3.startAutoplay()
  }
  doClick(){
    console.log('列表项被单击了...')
  }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
