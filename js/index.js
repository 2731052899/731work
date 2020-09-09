
window.onload = function(){
    var i = 0;
    setInterval(() => {
        i++;
        if(i%2 ==0){
        $(".banner").css("background-image","url('https://5949e99dcd15b.t73.qifeiye.com/qfy-content/uploads/2017/06/e7aa106a29ee5c714489235813b86dcb.jpg')");
        
    }
        else{
        $(".banner").css("background-image","url('https://5949e99dcd15b.t73.qifeiye.com/qfy-content/uploads/2017/06/e6cb3fd68ffff65b2d637d92ac97903a.jpg')"); 
        }
    }, 2000) 
}
function isShow($el) {
    var winH = $(window).height(),//获取窗口高度
        scrollH = $(window).scrollTop(),//获取窗口滚动高度
        top = $el.offset().top;//获取元素距离窗口顶部偏移高度
    if (top < scrollH + winH) {
        return true;//在可视范围
    } else {
        return false;//不在可视范围
    }
}
$(window).on('scroll', function () {//监听滚动事件
    checkShow();
})
// checkShow();
function checkShow() {//检查元素是否在可视范围内
    $(".nr1").each(function () {//遍历每一个元素
        var $cur = $(this);
        // if (!!isloaded($cur)) { return; }//判断是否已加载
        if (isShow($cur)) {
            setTimeout(function () {
                showImg($cur);
            }, 300)//设置时间是为了更好的看出效果
        };
    });
    $(".teach.img").each(function () {//遍历每一个元素
        var $cur = $(this);
        // if (!!isloaded($cur)) { return; }//判断是否已加载
        if (isShow($cur)) {
            setTimeout(function () {
             
                showImg($cur[i]);
           
            }, 300)//设置时间是为了更好的看出效果
        };
    });
    $(".box").each(function () {//遍历每一个元素
        var $cur = $(this);
        // if (!!isloaded($cur)) { return; }//判断是否已加载
        if (isShow($cur)) {
            setTimeout(function () {
                showImg($cur);
            }, 300)//设置时间是为了更好的看出效果
        };
    });
    
}
function showImg($el) {
    $el.css('margin-top', "0");
    $el.css("transition","2s ease-in-out");
}
var i = 0 ;
setInterval (function(){
    i++;
    console.log(i);
    $(".haibao-img-box").css("margin-left","-"+i*100+"%");
    $(".newimg").attr("src","./img/4.webp");
    if(i >= 3 ){ 
    $(".haibao-img-box").css("transition","none");
    $(".haibao-img-box").css("margin-left","0");
    i = 0;
}else{
    $(".haibao-img-box").css("transition","1s ease-in");
}
},3000
)
var t = setTimeout(function(){
    i++;
    console.log(i);
    $(".haibao-img-box").attr("margin-left","i*100%");
  
//     if(i % 2 == 0 ){
//  $(".newimg").attr("src","./img/4.webp");
// }else{
//     $(".newimg").attr("src","./img/5.webp");
//     // $(".haibao-img-box").css("margin-left","0");
// }

    

},500)