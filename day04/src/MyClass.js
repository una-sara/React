/*ES6中的新特性*/
class Emp{
  ename = 'tom'     //实例属性
  age = 20          //实例属性
  static location = '中国' //所用的实例共用的属性

  printInfo(){    //实例方法
    console.log(this.ename, this.age)
  }
  static printLocation(){   //静态方法
    //console.log(this.location)//this指向当前的实例
    console.log(Emp.location)
    //console.log(this.age)  //错误！
  }
}

//console.log(Emp.location) //通过类名来访问静态属性
Emp.printLocation() //通过类名来访问静态方法

/*
let e1 = new Emp()
//e1.printInfo()
//console.log(e1.location) //实例的引用不能访问静态成员

let e2 = new Emp()
//console.log(e2.location)//实例的引用不能访问静态成员
//e2.ename = 'mary'
//e2.age = 19
//e2.printInfo()
*/
