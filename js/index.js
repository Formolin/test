/**
 * Created by Administrator on 2017/2/16 0016.
 */
$(function () {
    // $('.uls li').hover(function () {
    //     $(this).children('ul').slideToggle();
    // });

//    轮播图
    $('.ctrl li').on('mouseover',function () {
        var $index = $(this).index();
        // alert($index);
        $(this).addClass('active').siblings().removeClass('active');
        $('.box .imgs').eq($index).fadeIn('slow').siblings().fadeOut('slow');
        //  $('.box .images').hide('slow').eq($index).show('slow');
        clearInterval(timer);
    });

    var timer =null;
    var num=0;
    var index = $('.ctrl li').length;
    // alert(index);
    timer =setInterval(function () {
        move_banner();
    },2000);

    function move_banner(){
        if(num==index){
            num=0;
        }
        //大图切换
        $('.box .imgs').eq(num).fadeIn('slow').siblings().fadeOut('slow');
        //小图切换
        $('.ctrl li').eq(num).addClass('active').siblings().removeClass('active');

       num++;

    }


//   scrolltop
    window.onscroll = function () {
        // alert(1);
        var top = document.body.scrollTop;
        console.log(top);
        if(top >= 50){
            // alert(111);
            $('nav').addClass('hold');
        }else{
            $('nav').removeClass('hold');
        }
    };

//    添加图片
// $('.pros-one .box').append('<img src="img/index-desc-inner-bg.png" alt="">');



//    tab切换
    $('#pros .lis').on('click',function () {
        var index = $(this).index();
        // alert(index);
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab li').eq(index).addClass('current').siblings().removeClass('current');

        // pros的自动高度
        var $height = $('.tab .current').height();
        // console.log($height);
        $('#pros').height($height+60);
    })

    $(window).on('resize',resize).trigger('resize');
});

function resize(){

// alert(1);
 
        var index = $('#pros .lis').index();
        // alert(index);
        
        // pros的自动高度
        var $height = $('.tab .current').height();
        // console.log($height);
        $('#pros').height($height+60);
    


}