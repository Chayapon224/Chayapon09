import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //ตรงนี้คือตัวแปลรับค่าจาก  input
  weight ? : number;
  hight ? : number;

  //ตรงนี้คือ ตัวแปลที่ใช้ในการแสดงผลลัพธ์
  result ? : number;
  result_text ? : string ="";

  constructor() {}

  oncal(){
    console.log("w :" + this.weight)
    console.log("h :" + this.hight)
    if(this.weight == undefined || this.hight == undefined){
 alert("กรุณากรอกข้อมูลให้ครบถ้วน");
 return;
  }
var hi = this.hight / 100;
this.result = this.weight / (hi * hi);
console.log("ผลลัพธ์" + this.result)

if(this.result < 18.5 ){
  this.result_text ="ผอมเกินไป";
    //console.log("ผอมเกินไป")
}else if(this.result >= 18.6 && this.result <= 24.9 ){
  this.result_text ="น้ำหนักปกติ เหมาะสม";
  //console.log("น้ำหนักปกติ เหมาะสม")
}else if(this.result >= 25 && this.result <= 29.9){
  this.result_text ="อ้วน";
  //console.log("อ้วน")
}else{
 // console.log("อ้วนมาก")
  this.result_text ="อ้วนมาก";
}




  }


  
}
