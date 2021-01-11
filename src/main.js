let html =document.querySelector("#html");
//使用css选择器
let style=document.querySelector("#style")

let string=`
/*你好，我叫花花，
 *接下来我演示一下我的前端功底
 *首先我要准备一个div
 */
#div1{
    border:1px solid red;
    width:200px;
    height:200px;

}
/*接下来我把div变成一个八卦图
 *注意看好了
 *首先，把div变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    border:none;
}
/*八卦是阴阳形成的
 *一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*给八卦图加上两个眼睛*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:black;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:white;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);}
`
let string2="";
let n=0
html.innerHTML=string.substring(0,n);
let step=()=>{//创建一个函数，包裹延时函数，进行多次操作
setTimeout(()=>{
    
    if(string[n]==='\n'){
        string2+='<br>';//如果是回车，就不照搬
    }else if(string[n]===' '){
        string2+='&nbsp'
    }else {
        string2+=string[n];//如果是回车，就照搬
    }
    html.innerHTML=string2;
    style.innerHTML=string.substring(0,n);
    window.scrollTo(0,999999);
    html.scrollTo(0,999999);
    if(n<string.length-1){
        n=n+1
        step() 
    }

},0);
}
step()
