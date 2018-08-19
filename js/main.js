!function(){

let result=`/* 我们来展示一下怎么用网页画一个熊本熊吧~ */
/* 首先呢，先来一个背景色呗 */
#code{
    padding:20px;
    background:white;
    font-family:Monaco;
}
.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow:1;
}
/* 这代码黑黑的，太丑了，我们高亮一下代码吧 */
.token.selector{
    color:#690;
}
.token.property{
    color:#905;
}
.token.function{
    color:#DD4A68;
}
/* 好了，这样好看一点了 */

/* 对了，下面的过程如果你没耐心看下去~ */
/* 按一下右上角的按钮就可以直接跳过画画的过程啦~ */

/* 接下来我们先给熊本熊画一个框框呗 */
.circle {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    min-width: 400px;
    overflow: hidden;
    background: #EDEBE7;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.9);
}
/* 先给熊本熊添加两个手臂吧~ */
.kumamon {
    position: relative;
    padding-top: 80px;
    height: 100%;
}
.kumamon::before, .kumamon::after {
    width: 40px;
    height: 100px;
    border-radius: 0;
    content: "";
    position: absolute;
    bottom: 30px;
    display: inline-block;
    background: #0c0606;
}
.kumamon::before {
    left: 30px;
    -webkit-transform: rotate(25deg);
            transform: rotate(25deg);
}
.kumamon::after {
    right: 30px;
    -webkit-transform: rotate(-25deg);
            transform: rotate(-25deg);
}

/* 画上圆圆的脸~ */
.face {
    width: 300px;
    height: 350px;
    border-radius: 150px 150px 0 0;
    position: relative;
    margin: 0 auto;
    background: #0c0606;
}
.face::after, .face::before {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 110px;
    display: inline-block;
    background: #ed2528;
}
.face::before {
    left: -12px;
}
.face::after {
    right: -12px;
}

/* 然后是两只眼睛哦~ */
.eye {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    position: absolute;
    top: 55px;
    background: white;
    text-align: center;
}
.eye::before, .eye::after {
    content: "";
    display: inline-block;
}
.eye::before {
    width: 10px;
    height: 20px;
    border-radius: 4px / 10px;
    margin-top: 17px;
    background: #0c0606;
}
.eye::after {
    width: 28px;
    height: 20px;
    border-radius: 50%;
    z-index: 1;
    position: absolute;
    top: -35px;
    box-shadow: 0 6px white inset;
}
/* 再加两只圆圆的耳朵~ */
.ear {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    top: 80px;
    background: #0c0606;
}
.ear::before {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    content: "";
    display: inline-block;
    background: white;
    margin-top: 18px;
    margin-left: 15px;
}

/* 最后再加上鼻子和嘴巴就可以啦嘻嘻~ */
.mouth {
    width: 145px;
    height: 110px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    top: 100px;
    background: white;
    text-align: center;
}
.mouth::before, .mouth::after {
    content: "";
    display: inline-block;
    background: #0c0606;
}
.mouth::before {
    width: 40px;
    height: 30px;
    border-radius: 20px / 15px;
    margin: 10px 0;
}
.mouth::after {
    width: 110px;
    height: 30px;
    border-radius: 55px / 15px;
}
  
/* 至此，我们的熊本熊就画完啦~~ */
/* 你以为这样就结束了吗？ */
/* 摸摸熊本熊的头呗，熊本熊会和你互动一下滴！~ */
`
let n=0
let during=0
let finishCreate=false;
let id=setTimeout(function fn1(){
    n+=1
    code.innerHTML=Prism.highlight(result.substring(0,n), Prism.languages.css, 'css');
    styleCode.innerHTML=result.substring(0,n)
    code.scrollTop=code.scrollHeight
    if (n<result.length){
        id=setTimeout(fn1,during)
    } else {
        finishCreate=true
    }
},during)

$('.endButton').on('click',()=>{
    clearTimeout(id)
    code.innerHTML=Prism.highlight(result.substring(0,result.length-1), Prism.languages.css, 'css');
    styleCode.innerHTML=result.substring(0,result.length-1)
    code.scrollTop=code.scrollHeight
    finishCreate=true
    $('.endButton').siblings().attr('disabled',true);
})
$('button').on('click',(buttonTarget)=>{
    let target=buttonTarget.currentTarget
    $(target).addClass('active').siblings('.active').removeClass('active')
})
$('.head').on('click',()=>{
    console.log(finishCreate)
})
$('button[data-speed]').on('click',(buttonTarget)=>{
    let speedTag=buttonTarget.currentTarget.attributes[0].nodeValue
    console.log(speedTag)
    switch (speedTag) {
        case 'fast':
            during=0
            break
        case 'middle':
            during=30
            break
        case 'slow':
            during=60
            break
    }
})
if ('ontouchstart' in document.body) {
    $('.head').on('click',()=>{
        if (finishCreate) {
            $('.hand.right').addClass('active Phone')
            $('.speaking').addClass('active Phone')
        }
    })
} else {
    $('.head').on('mouseenter',()=>{
        if (finishCreate) {
            $('.hand.right').addClass('active PC')
            $('.speaking').addClass('active PC')
        }
    })
    $('.head').on('mouseleave',()=>{
        if (finishCreate) {
            $('.hand.right').removeClass('active PC')
            $('.speaking').removeClass('active PC')
        }
    })
}

}.call()
