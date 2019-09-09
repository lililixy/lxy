//头部效果
!function ($) {
    class nav {
        constructor() {
            this.down1 = $('.box-right li .sanjiao1');
            this.down2 = $('.box-right li .sanjiao2');
            this.a1 = $('.box-right li .a1');
            this.a2 = $('.box-right li .a2');
            this.li1 = $('.box-right .myyh');
            this.li2 = $('.box-right .khfw');
            this.bot1 = $('.myyh .nav-bottm');
            this.bot2 = $('.khfw .nav-bottm');
        }
        init() {
            var $this = this;
            this.li1.hover(function () {
                $this.down1.attr('class', 'sanjiao-up');
                $(this).css('background', '#eaebec')
                $this.bot1.slideDown();
            }, function () {
                $this.down1.attr('class', 'sanjiao-down');
                $(this).css('background', '#fff')
                $this.bot1.slideUp();
            });
            this.li2.hover(function () {
                $this.down2.attr('class', 'sanjiao-up');
                $(this).css('background', '#eaebec');
                $this.bot2.slideDown();
            }, function () {
                $this.down2.attr('class', 'sanjiao-down');
                $(this).css('background', '#fff');
                $this.bot2.slideUp();
            });
        }
    }
    new nav().init()
}(jQuery)
//图片验证效果
!function ($) {
    class pic {
        constructor() {
            this.li = $('.img-check-pic');
            this.shu = 0;
            this.tishi = $('img-check-tip')
        }
        init() {
            var $this = this;
            this.li.on('click', function () {
                $this.shu -= 60;
                if ($this.shu < -180) {
                    $this.shu = 0
                }
                $(this).find('img').css('margin-top', $this.shu + 'px');
                if ($this.li.children('img').eq(0).offset().top === 197 &&
                    $this.li.children('img').eq(1).offset().top === 197 &&
                    $this.li.children('img').eq(2).offset().top === 257 &&
                    $this.li.children('img').eq(3).offset().top === 257) {
                    alert(1)
                } else {
                    $($this.tishi).show()
                }
            })
        }
    }
    new pic().init()
}(jQuery)

//注册信息提交
!function ($) {
    class sign {
        constructor() {
            this.user = $('#user');
            this.pass = $('#pwd');
            this.phone = $('#phone-num');
            this.btn = $('#register-btn');
            this.sp=$('.user-sp');
            this.ts=$('.pwd-tips');

        }
        init() {
            var $this=this;
            this.user.blur(function(){
              $this.useryz(this)
            });
            this.phone.blur(function(){
                $this.phoneyz(this)
              });
            this.pass.focus(function(){
                $($this.ts).slideDown()
            });
            this.pass.blur(function(){
                $($this.ts).slideUp()
            });
            this.btn.on('click', function () {
                $this.tijiao();

             });
        }
        useryz($obj){
            var $this=this;
            $.ajax({
                url:'../../php/sign.php',
                data:{//给后端
                    user:this.user.val()
                },
                success:function(data){
                    if(!data){
                        $($obj).next().html('√');
                        $($obj).next().css('color','green');
                    }else{
                        $($obj).next().html('*该用户名已存在');
                        $($obj).next().css('color','red');
                    }
                }
            })
        }
        phoneyz($obj){
            var $this=this;
            $.ajax({
                url:'../../php/sign.php',
                data:{//给后端
                    phone:this.phone.val()
                },
                success:function(data){
                    if(!data){
                        $($obj).next().html('√');
                        $($obj).next().css('color','green');
                    }else{
                        $($obj).next().html('*该用户名已存在');
                        $($obj).next().css('color','red');
                    }
                }
            })
        }
        tijiao() {
            $.ajax({
                type: 'post',
                url: '../../php/sign.php',
                data: {
                    user: this.user.val(),
                    pass: this.pass.val(),
                    phone:this.phone.val()
                },
                success:function(data){
                    if(data){
                        location.href='http://10.31.157.57/yoho/src/html/login.html';
                    }
                }         
            });
        }
    }
    new sign().init()
}(jQuery)

//密码强度验证
$('#pwd')[0].oninput=function(){
    let num=0;
    let numreg = /\d+/;
    let uppercase = /[A-Z]+/;
    let lowercase = /[a-z]+/;
    let othercase = /[\W\_]+/;
    if (numreg.test($(this).val())) {
        num++;
    }
    if (uppercase.test($(this).val())) {
        num++;
    }
    if (lowercase.test($(this).val())) {
        num++;
    }
    if (othercase.test($(this).val())) {
        num++;
    }
    switch (num) {
        case 1:
            $('.pwd-intensity-container .low').css('background-color','red').siblings().css('background-color','#e8e8e8')
            flg2 = false;
            break;
        case 2:
        case 3:
            $('.pwd-intensity-container .mid').css('background-color','yellow').siblings().css('background-color','#e8e8e8')
            flg2 = true;
            break;
        case 4:
             $('.pwd-intensity-container .high').css('background-color','green').siblings().css('background-color','#e8e8e8')
            flg2 = true;
            break;

    }
}