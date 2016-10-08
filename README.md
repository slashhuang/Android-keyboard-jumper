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
