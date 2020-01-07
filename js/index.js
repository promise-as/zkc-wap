//展开更多
var isture = true;
$(".zkgd").click(function() {
    if (isture) {
        $(this).prev().css("height", "auto");
        $(this).html("收起更多");
        isture = false;
    } else {
        $(this).prev().css("height", "");
        $(this).html("展开更多");
        isture = true;
    }
});

//tab展开更多
var tabture = true;
$(".tabgd").click(function() {
    if (isture) {
        $(this).siblings().css("height", "auto");
        $(this).html("收起更多");
        isture = false;
    } else {
        $(this).siblings().css("height", "");
        $(this).html("展开更多");
        isture = true;
    }
});

//tab切换
$(".sc-tj .sc-list li").each(function(i) {
    $(".sc-tj .sc-list li").eq(i).click(function() {
        $(".sc-tj .sc-list li").removeClass("active");
        $(this).addClass("active");
        $(".qh-list").hide();
        $(".qh-list").eq(i).show();
    });
});

//zx
$(".zxtab1 .sc-list li").each(function(i) {
    $(".zxtab1 .sc-list li").eq(i).click(function() {
        $(".zxtab1 .sc-list li").removeClass("active");
        $(this).addClass("active");
        $(".zxnrtab1").hide();
        $(".zxnrtab1").eq(i).show();
    });
});
$(".zxtab2 .sc-list li").each(function(i) {
    $(".zxtab2 .sc-list li").eq(i).click(function() {
        $(".zxtab2 .sc-list li").removeClass("active");
        $(this).addClass("active");
        $(".zxnrtab2").hide();
        $(".zxnrtab2").eq(i).show();
    });
});
//公用切换
$(".gy li").each(function(i) {
    $(".gy li").eq(i).click(function() {
        $(".gy li").removeClass("active");
        $(this).addClass("active");
        $(".gynr").hide();
        $(".gynr").eq(i).show();
    });
});


//课程分类js    kc-class

$(".kcfl .sc-list").eq(1).css("margin-top", "0");
$(".smlqs").hide();
$(".sqb").text  ('类别展开')
$(".sqb").click(function() {
    $(".fs.fs3 div").toggle()
	
    if($(".sqb").text() == '收起')
    {
        $(".sqb").text ('类别展开')
		$(".smlqs").hide();

    }
    else{ $(".sqb").text ('收起')
		$(".smlqs").show();
	 }
})

$('.m-tabs li').click(function() {
    var $this = $(this);
    $this.parent().parent().find('li').removeClass('active');

    $this.addClass('active');
    $this.parents(".z1").find('.z-qh').hide();
    $this.parents(".z1").find('.z-qh').eq($this.index()).show();

    $this.parents(".z1").find('.content-qh').hide();
    $this.parents(".z1").find('.content-qh').eq($this.index()).show();
})


//导航下拉

$(".fkyaa").click(function() {
    $(".nav-s").show();
});
$(".close").click(function() {
    $(".nav-s").hide();
});

//倒计时

countDown();

function countDown(n) {
    var count = 0;
    var midTime = 43200;
    count = setInterval(function() {
        midTime--;
        h = parseInt(midTime / 3600),
            m = parseInt((midTime - h * 3600) / 60),
            s = parseInt(midTime - h * 3600 - m * 60);
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        $('.timew .h').text(h);
        $('.timew .m').text(m);
        $('.timew .s').text(s);
    }, 1000)
}

//校区
$(".qy").click(function() {
    $(this).siblings('.hidearea').toggle();
})

//展开更多
$('.main_content .open').click(function() {
    if ($(this).parents('.main_content').hasClass('overflow')) {
        $(this).find('span').text('收起全部  ∧')
    } else {
        $(this).find('span').text('展开全部  ∨')
    }
    $(this).toggleClass('lg');
    $(this).parents('.main_content').toggleClass('overflow');
})



//2018-12-4  咨询悬浮
if($('#lq-yuyue').size()>0){
	$('#lq-yuyue').after('<div class="xf-blank"></div>');
	$('.xf-blank').height($('#lq-yuyue').height());
	$('.xf-blank').css('margin-bottom', '0.27rem');
	$('.xf-blank').hide();
	var mTop = document.getElementById('lq-yuyue').offsetTop || $('#lq-yuyue').offset().top;
	window.addEventListener("scroll", function(e) {
		var topJl = document.documentElement.scrollTop || document.body.scrollTop;
		var yuYueTop = mTop - topJl;
		if (yuYueTop < 0) {
			$('#lq-yuyue').addClass('xf');
			$('.xf-blank').show();
		} else {
			$('#lq-yuyue').removeClass('xf');
			$('.xf-blank').hide();
		}
	});
}

//
$(".qlp-module").parent().parent(".main_wrap").css("padding","0");
//表单弹出
//theaMsForm($('.sign-in-mid'));
midtc('#mid-tc-1', '.close', 10000, 15000, 1, '.mask');

function midtc(ele, c, f, a, n, ele2, isBtm) {
    var $par = $(ele);
    var $num = 0;
    var $mask = $(ele2) || 0;
    var $isBtm = isBtm || 0;
    popupTc(f);
    $(c, $par).click(function() {
        $par.hide();
        $('.blank').hide();
        $('.mask').hide();
        $num++;
        if ($num <= n) {
            popupTc(a)
        }
    })

    function popupTc(d) {
        setTimeout(function() {
            $par.fadeIn(300);
            if (!!$mask) {
                $mask.fadeIn(300);
            }
            $('.blank').fadeIn(300);
        }, d)
    }
};

// author:HongBaojin 2020-01-06
$(function(){
    $('.form-btn').click(function(){
        $('#popup').show();
    })
    $('.popup-close').click(function(){
        $('#popup').hide();
    })
})