import { Pipe, PipeTransform } from '@angular/core';
import { UrlService } from './url.service';

@Pipe({
  name: 'imgUrl'
})
export class ImgUrlPipe{
  constructor(private url: UrlService){}
  /*把所有的
  <img src="img/....
  全部替换为
  <img src="http://www.codeboy.com/img/....*/
  transform(val) {
    if(val){
      return val.replace(/src="img/g, 'src="'+this.url.host+'img')
    }
  }

}
