/*
* @Author slashhunag
* 处理键盘被遮挡，自动弹出
* 处理安卓弹出框
* 使用方式
 import K_jumper from 'K_jumper';
 ready(){
   new K_jumper(ele,option);
}
*
*/

class K_jumper {
    constructor(ele,option={useCapture:false}){
        let self =this;
        let { useCapture } = option;
        this.$ele = ele;
        if(this.$isAndroid()){
            ele.addEventListener('blur',function(){
               self.blur()
            },useCapture);
            ele.addEventListener('focus',function(){
               self.focus()
            },useCapture);
            //定义元素在屏幕上的定位 ===>  半个屏幕高度 - 100px
            this.$$scrollDistance = this.$w_height()/2 -100;
        };
    }
    $isAndroid(){
        let userAgent= navigator.userAgent;
         return (/android/i.test(userAgent));
    }
    //屏幕相关
    $w_height(){
        return window.innerHeight;//屏幕高度
    }
    //内容区相关
    $d_height(height){ //内容区总高度
        var body = document.body,
            html = document.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
        return height
    }
    $d_sTop(){
        return document.body.scrollTop;
    }
    /*—--------触发的元素相关---------*/
    $offTop(){
        let ele = this.$ele;
        let _top = 0;
        while(ele){
            _top  += ele['offsetTop'];
            ele = ele['offsetParent']
        }
        return _top;
    }
    $offHeight(){
        return this.$ele['offsetHeight']
    }
    //元素距离屏幕顶端
    $top(){
        return this.$offTop()- this.$d_sTop();
    }
    setS_Top(height){ //计算屏幕滚动，需要document滚动的距离
        return this.$offTop()-height;
    }
    //元素距离屏幕底端
    $bottom(){
         return this.$w_height()- this.$top();
    }
    //距离底部不超过屏幕一半，则滚动
    $needScroll(){
        return this.$top()>this.$$scrollDistance
    }
    $scroll(){
        document.body.style.height =  this.$d_height()+ this.$w_height()+ 'px'; //增加一屏高度
        document.body.scrollTop = this.setS_Top(this.$$scrollDistance)
    }
    $reset(){
         document.body.style.height = '';
         document.body.scrollTop=this.$position;
    }
    /*逻辑入口*/
    focus(){
         this.$position = this.$d_sTop();
         this.$scroll();
    }
    blur(){
        this.$reset();
    }
}

module.exports = K_jumper;