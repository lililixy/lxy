//主页
//文字切换效果
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
//退出用户登录状态
// $(document).ready(function(){
//     $('.quit').on('click',function(){
//     myobj.delcookie('yhuser')
//     })
// })
// 显示登录状态
//使用promise解决异步问题
// var yohoid = location.search.substring(1)
// let promise=new Promise((resolve,reject)=>{
// // if(yohoid){
//     $.ajax({
//         url: '../../php/selsecusersid.php',
//         data: {
//             sid: yohoid
//         },
//         dataType: 'json'
//     }).done(function (data) {
//         $('.yhuser').html(data.user);
//         resolve();//ajax是异步操作所以要用promise取值
//         reject()
//     })
//     if ($('.yhuser').html() !== null) {
//         $('.log').hide()
//         $('.sig').hide()
//         $('.quit').show()
//     } else {
//         $('.log').show()
//         $('.sig').show()
//         $('.quit').hide()
//     }
// // }
// })
// promise.then(function(){
//     var yhuser=myobj.getcookie('yhuser')
//     myobj.addcookie('cookieuser',yhuser,10)
//     $('.yhuser').html(yhuser)
// })
// 将用户信息存储到cookie
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
var yhuser = myobj.getcookie('yhuser')
// myobj.addcookie('cookieuser',yhuser,10)
$('.yhuser').html(yhuser)


// let promise=new Promise((resolve,reject)=>{
//退出用户登录状态
$('.quit').on('click', function () {
    $('.log').show()
    $('.sig').show()
    $('.quit').hide()
    myobj.delcookie('yhuser');
    var yhuser = myobj.getcookie('yhuser');
    $('.yhuser').html('');
    // if ($('.yhuser').html() == null) {
    //     $('.log').show()
    //     $('.sig').show()
    //     $('.quit').hide()
    // } else {
    //     $('.log').hide()
    //     $('.sig').hide()
    //     $('.quit').show()
    // }
})
if ($('.yhuser').html()!="") {
    $('.log').hide()
    $('.sig').hide()
    $('.quit').show()
} else {
    $('.log').show()
    $('.sig').show()
    $('.quit').hide()
}
// })

// promise
// .then(ykzt())
// .catch(function(){
//     alert('删除失败')
// })
// if($('.yhuser').html()==null){
//     ykzt(); 
// }
// ykzt()
// //用户状态函数封装
// function ykzt(){
//     $.ajax({
//         url: '../../php/getuser.php',
//         dataType: 'json'
//     }).done(function (data) {
//         // console.log(data)
//         $.each(data, function (index, value) {
//             $('.yhuser').html(value.user);
//             $('.yhuser').attr('sid', value.sid);
//             if ($('.yhuser').html() !== null) {
//                 $('.log').hide()
//                 $('.sig').hide()
//                 $('.quit').show()
//             } else {
//                 $('.log').show()
//                 $('.sig').show()
//                 $('.quit').hide()
//             }
//         })
//     });
// }
//轮播图
!function ($) {
    //轮播图效果
    class slide {
        constructor() {
            this.slide = $('.slideshow');
            this.img = $('.slideshow li a img');
            this.left = $('.slideshow .left-lg');
            this.right = $('.slideshow .right-lg');
            this.smslide = $('.smslide li a img');
            this.arr = [];
            this.index = 0;
            this.previndex = 0;
            this.timer = null;
        }
        init() {
            var $this = this;
            $.ajax({
                url: '../../php/getdata.php',
                dataType: 'json'
            }).done(function (data) {
                $.each(data, function (index, value) {
                    $this.arr.push(value.url);
                    $this.img.attr("src", $this.arr[$this.index]);
                })
            });
            this.left.on('click', function () {
                $this.index--;
                if ($this.index < 0) {
                    $this.index = 9
                }
                $this.img.attr("src", $this.arr[$this.index])
            });
            this.right.on('click', function () {
                $this.index++;
                if ($this.index > 9) {
                    $this.index = 0
                }
                $this.img.attr("src", $this.arr[$this.index]);
            });
            this.timer = setInterval(function () {
                $this.right.click()
            }, 2000);
            this.slide.hover(function () {
                clearInterval($this.timer)
            }, function () {
                $this.timer = setInterval(function () {
                    $this.right.click()
                }, 2000);
            })
        }
    }
    new slide().init()
}(jQuery)

//商品数据渲染
!function ($) {
    $.ajax({
        url: '../../php/getshopdata.php',
        dataType: 'json'
    }).done(function (data) {
        console.log(data);
        var $html = '<ul>';
        $.each(data, function (index, value) {
            $html += `
                    <li>
                        <a href="detailpage.html?sid=${value.sid}" target="_blank">
                            <img src="${value.url}">
                            <p>${value.title}<p>
                        </a>
                        <p>¥${value.price}</p>
                    </li>
                `;
        });
        $html += '</ul>';
        $('.productlist').html($html);

    });
}(jQuery)

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
            this.box.hover(function () {
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
            // if($(window).height()>$(window).scrollTop()){
            //     $($this.boxbottom).hide();
            // }
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

