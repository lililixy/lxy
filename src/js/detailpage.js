// import { get } from "https";
let myobj = {
    addcookie: function (key, value, day) {
        let date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + date;
    },
    getcookie: function (key) {
        let arr = decodeURIComponent(document.cookie).split('; ');
        for (let value of arr) {
            let newarr = value.split('=');
            if (key === newarr[0]) {
                return newarr[1];
            }
        }
    },
    delcookie: function (key) {
        myobj.addcookie(key, '', -1);
    }
}
// //用户登录状态
   var yhuser= myobj.getcookie('yhuser')
    $('.yhuser').html(yhuser)
    if ($('.yhuser').html()!="") {
        $('.logg').hide()
        $('.sigg').hide()
        $('.quit').show()
    }else{
        $('.logg').show()
        $('.sigg').show()
        $('.quit').hide()
    }
    //退出登录状态
    $('.quit').on('click', function () {
        $('.logg').show()
        $('.sigg').show()
        $('.quit').hide()
        myobj.delcookie('yhuser');
        var yhuser = myobj.getcookie('yhuser');
        $('.yhuser').html('');
    })
//详情页
!function ($) {
    class yohoList {
        constructor() {
            this.li = $('.yoho-list');//获取ul
            this.kehu = $('.kehufuwu');
            // this.kehulist=$('.kuhufuwu .kehu-list');
        }
        init() {
            let $alist = this.li.find('li').children('a');//获取a标签集合
            $alist.on('mouseover', function () {//鼠标移入
                $.each($(this), function (index, value) {//给每个a标签添加文字切换效果
                    $(value).html($(value).attr('data-cn'))//把a标签的data-cn的属性值赋值给a，改变他原本的内容
                })
            });
            $alist.on('mouseout', function () {//鼠标移出
                $.each($(this), function (index, value) {
                    $(value).html($(value).attr('data-en'))
                })
            });
            this.kehu.on('mouseover', function () {
                $(this).find('.kehu-list').fadeIn(0)
            });
            this.kehu.on('mouseout', function () {
                $(this).find('.kehu-list').fadeOut(0)
            })
        }
    }
    new yohoList().init()
}(jQuery)

// 商品详情渲染
!function () {
    //1.获取sid
    var yohoid = location.search.substring(1).split('=')[1];
    //2.将当前的id传给后端获取对应的数据
    $.ajax({
        url: '../../php/selectdata.php',
        data: {
            sid: yohoid
        },
        dataType: 'json'
    }).done(function (data) {//data:后端返回的和id对应的数据
        $('.bigimg img').attr('src', data.url);
        // $('#bpic').attr('src', data.url);
        // $('#smallpic').attr('sid', data.sid);
        $('.title').html(data.title);
        $('.price-bg .price-sm').html(data.price);
        $('.bigimg img').attr('sid', data.sid);
        var arr = data.urls.split(',');
        var str = '';
        $.each(arr, function (index, value) {
            str += '<li><img src="' + value + '"/}></li>';
        });
        $('.smimg').html(str);
    })
}();

// 放大镜效果
! function ($) {
    $('.sf').width($('.spic').width() * $('.bf').width() / $('.bpic').width());
    $('.sf').height($('.spic').height() * $('.bf').height() / $('.bpic').height());
    var bili = $('.bpic').width() / $('.spic').width();
    $('.bigimg').hover(function () {
        $('.sf').css('visibility', 'visible');
        $('.bf').css('visibility', 'visible');
        var $imgsrc = $('.spic').attr('src');
        $('.bpic').attr('src', $imgsrc)
        $(this).on('mousemove', function (ev) {
            var $left = ev.pageX - $('.mainimg').offset().left - $('.sf').width() / 2;
            var $top = ev.pageY - $('.mainimg').offset().top - $('.sf').height() / 2;
            if ($left < 0) {
                $left = 0;
            } else if ($left >= $('.spic').width() - $('.sf').width()) {
                $left = $('.spic').width() - $('.sf').width();
            }
            if ($top < 0) {
                $top = 0;
            } else if ($top >= $('.spic').height() - $('.sf').height()) {
                $top = $('.spic').height() - $('.sf').height();
            }
            $('.sf').css('left', $left);
            $('.sf').css('top', $top);
            $('.bpic').css('left', -$left * bili);
            $('.bpic').css('top', -$top * bili);
        });
    }, function () {
        $('.sf').css('visibility', 'hidden');
        $('.bf').css('visibility', 'hidden');
    });
}(jQuery);
!function ($) {
    class count {
        constructor() {
            this.jian = $('.num-wraper .minus-plus-jian');
            this.jia = $('.num-wraper .minus-plus-jia');
            this.shu = $('.num-wraper .num');
            this.shu1 = 0;
            this.shu2 = 0
        }
        init() {
            var $this = this;
            this.shu1 = this.shu.html()
            this.jian.on('click', function () {
                if ($($this.shu).html() == 0) {
                    $($this.shu).html() = 0
                }
                $this.shu2 = $this.shu1--;
                $($this.shu).html($this.shu2)

            });
            this.jia.on('click', function () {
                $this.shu2 = $this.shu1++;
                $($this.shu).html($this.shu2)

            })
        }
    }
    new count().init()
}(jQuery)
//图片切换
!function () {
    class qiehuan {
        constructor() {
            this.bigimg = $('.bigimg img');
            this.main = $('.img-main');
        }
        init() {
            var $this = this;
            this.main.on('mouseover', function (ev) {
                if (ev.target.nodeName === 'IMG') {
                    var $smimg = $($this.main).find('.smimg').find('li').find('img');
                    $smimg.on('mouseover', function () {
                        $smimg.css('border', 'none');
                        var $smsrc = $(this).attr('src')
                        $(this).css('border', '2px solid #000')
                        $this.bigimg.attr('src', $smsrc)
                    })
                }
            })
        }
    }
    new qiehuan().init()
}()
//加入购物车
! function ($) {
    //2.加入购物车。
    let sidarr = []; //存放商品的编号数组
    let numarr = []; //存放商品的数量数组
    //2.1取cookie(假设是第二次点击，获取第一次的cookie),提前约定cookie的key值
    //cookie添加， 获取， 删除
    let myobj = {
        addcookie: function (key, value, day) {
            let date = new Date();
            date.setDate(date.getDate() + day);
            document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + date;
        },
        getcookie: function (key) {
            let arr = decodeURIComponent(document.cookie).split('; ');
            for (let value of arr) {
                let newarr = value.split('=');
                if (key === newarr[0]) {
                    return newarr[1];
                }
            }
        },
        delcookie: function (key) {
            addcookie(key, '', -1);
        }
    }
    //编号：[2,4,5] 数量：[12,34,68]
    //将cookie取出转换成数组，利用数组进行判断是否是第一次。
    function cookieToArray() {
        if (myobj.getcookie('cookiesid') && myobj.getcookie('cookienum')) {
            sidarr = myobj.getcookie('cookiesid').split(',') //cookie存放商品编号的key值
            numarr = myobj.getcookie('cookienum').split(',') //cookie存放商品数量的key值
        }
    }
    $('.add-to-cart').on('click', function () {
            $('.op').hide();
            $('#balance').show();
            //通过当前点击的按钮，获取当前商品的(图片)sid。
            let $sid = $('.bigimg img').attr('sid');
            //是否第一次，获取cookie才能知道是否是第一次。第一次会存储cookie(编号和数量)
            cookieToArray(); //取出转换成数组
            if ($.inArray($sid, sidarr) !== -1) { //存在
                //通过sid获取对应的数量，取出数量+当前新添加的商品的数量。
                // console.log(numarr);
                // console.log(sidarr); //当前sid对应的数组的索引位置
                // console.log($.inArray($sid, sidarr)); //当前sid对应的数组的索引位置
                // console.log(numarr[$.inArray($sid, sidarr)]);
                let changenum = parseInt(numarr[$.inArray($sid, sidarr)]) + parseInt($('#num').html());//原来的数量+当前的数量。
                numarr[$.inArray($sid, sidarr)] = changenum;//数组值改变
                myobj.addcookie('cookienum', numarr.toString(), 10);//继续添加cookie 
            } else { //不存在
                sidarr.push($sid); //将编号push进数组
                myobj.addcookie('cookiesid', sidarr.toString(), 10); //存储cookie ，整个数组。
                numarr.push($('#num').html()); //将商品的数量push进数组
                myobj.addcookie('cookienum', numarr.toString(), 10);
            }
    });
    $('.balance-btns .go-cart').on('click',function(){
        if($('.yhuser').html()!=""){
            location.href='http://10.31.157.57/yoho/src/html/cart.html';
        }else{
            alert('用户未登录,请前往登录')
            location.href='http://10.31.157.57/yoho/src/html/login.html';
        }
    })
}(jQuery);

//页面底部导航切换效果
!function ($) {
    class footernav {
        constructor() {
            this.box = $('.link-section');
            this.boxup = $(' .link-section .up');
            this.boxdown = $(' .link-section .down');
            this.timer = null;
            this.time1 = this.boxup;
            this.time2 = this.boxdown;
        }

        init() {
            var $this = this;
            this.timer = setInterval(function () {
                $this.settime()
            }, 2000);

            this.box.hover(function () {
                clearInterval($this.timer)
            }, function () {
                $this.timer = setInterval(function () {
                    $this.settime()
                }, 2000);
            })
        }

        settime() {
            if ($(this.time1).css("top") == 0 + 'px' && $(this.time2).css("top") == 32 + 'px') {
                this.time1.animate({
                    top: '-32',
                })
                this.time2.animate({
                    top: '0',
                })
            }

            if ($(this.time1).css("top") == -32 + 'px' && $(this.time2).css("top") == 0 + 'px') {
                $(this.time1).css("top", 32).animate({
                    top: '0',
                })
                this.time2.animate({
                    top: '-32',
                })
            }
            if ($(this.time1).css("top") == 0 + 'px' && $(this.time2).css("top") == -32 + 'px') {
                this.time1.animate({
                    top: '-32',
                })
                $(this.time2).css("top", 32).animate({
                    top: '0',
                })
            }
        }
    }
    new footernav().init()
}(jQuery)

//悬浮框效果
!function ($) {
    class xf {
        constructor() {
            this.anniu = $('.qrcode-hover-box .layer-box1');
            this.box = $('.qrcode-hover-box');
            this.boxtop = $('.download-app-box');
            this.boxbottom = $('.layer-box2')
            this.timer = null;
        }
        init() {
            var $this = this;
            this.boxtop.hide()
            this.box.stop(true).hover(function () {
                clearTimeout($this.timer)
                $this.timer = setTimeout(function () {
                    $this.boxtop.slideDown()
                }, 50)
            }, function () {
                clearTimeout($this.timer)
                $this.timer = setTimeout(function () {
                    $this.boxtop.slideUp()
                }, 50)
            });
            $(window).scroll(function () {
                var wHeight = $(window).height();
                var wTop = $(window).scrollTop();
                if (wTop >= wHeight) {
                    $($this.boxbottom).slideDown();
                }
                else {
                    $($this.boxbottom).slideUp();
                }
            });
            $($this.boxbottom).click(function () {
                $("html,body").animate({ scrollTop: 0 }, 500);
            });
        }
    }
    new xf().init()
}(jQuery)