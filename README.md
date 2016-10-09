# Android-keyboard-jumper
### [处理安卓手机input框focus/blur的键盘调起模块]

## usage

``` javascript

    //引入代码库

    import K_jumper from './index.js';

    //初始化focus和blur的安卓键盘调起逻辑，即可

    new K_jumper(InputDom,option);

```

## params 参数

> InputDom: 需要处理的input元素

> option:{useCapture:bolean}  采用捕获还是冒泡处理键盘事件，默认为{useCapture:false}

## code style requirement

```
    babel Engine > 6.0 && ES6/7 class vs module system

```
## 代码解决思路
> 检测Android机型 
> 计算需要处理的input框距离屏幕顶端的高度
> 未超过一半 ==>   return
> 超过一半  ==>   调用相关逻辑
>   ==> 增加一屏高度，保证document可以滚动
>   ==> 存储document这个时候的位置信息 + 计算document需要滚动的距离 
>   ==> focus ==> document scroll
>   ==> blur ==>document 回到原位
