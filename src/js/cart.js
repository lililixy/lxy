//购物车
$(document).ready(function () {
    //cookie操作方法
    class cart {
        constructor() {
            this.myobj = {
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
        }
        init() {
            var $this = this
            if (this.myobj.getcookie('cookiesid') && this.myobj.getcookie('cookienum')) {
                var csid = this.myobj.getcookie('cookiesid').split(','); //数组
                var cnum = this.myobj.getcookie('cookienum').split(',');
                $.each(csid, function (index, value) {
                    $this.showgoodslist(csid[index], cnum[index])
                });
            };
            // //用户登录状态
            var yhuser = this.myobj.getcookie('yhuser')
            $('.yhuser').html(yhuser)
            if ($('.yhuser').html()!="") {
                $('.log').hide()
                $('.sig').hide()
                $('.quit').show()
            }else{
                $('.log').show()
                $('.sig').show()
                $('.quit').hide()
            }
            $('.cart-operation .cart-del-btn').on('click', function () {
                $this.remove(this, csid, cnum);
            });
            $('.cart-num-cont .plus').on('click', function () {
                $this.shu1(this, csid, cnum)
            })
            $('.cart-num-cont .minus').on('click', function () {
                $this.shu2(this, csid, cnum)
            });
            $('.cart-fixed-submit .fixed-option input').on('click', function () {
                $this.calc()
            });
            $('.delete-all-sel').on('click', function () {
                var $input = $('.ic:checked')
                $this.remove($input, csid, cnum);
                ($('.cart-fixed-submit .fixed-option input'))[0].click()
            })
            this.empty();
            //退出登录状态
            $('.quit').on('click', function () {
                $('.log').show()
                $('.sig').show()
                $('.quit').hide()
                $this.myobj.delcookie('yhuser');
                var yhuser = $this.myobj.getcookie('yhuser');
                $('.yhuser').html('');
            })
        }
        remove(xthis, csid, cnum) {
            var $this = this;
            var lin = 0 + 'px';
            var he = $(document).height() + 'px';
            $('.body-mask').css('height', he);
            $('.yoho-dialog').slideDown();
            $('.btns .bt1').on('click', function () {
                $this.bt1(csid, cnum, xthis, lin)
            });
            $('.btns .bt2').on('click', function () {
                $('.yoho-dialog').slideUp();
                $('.body-mask').css('height', lin);
            });
            $('.close').on('click', function () {
                $('.yoho-dialog').slideUp();
                $('.body-mask').css('height', lin);
            });
        }
        bt1(csid, cnum, $this, lin) {
            $($this).parents('.cart-table').remove();
            let index = $.inArray($($this).parents('.cart-table').attr('sid'), csid)
            csid.splice(index, 1);
            cnum.splice(index, 1)
            this.myobj.addcookie('cookiesid', csid, 10);
            this.myobj.addcookie('cookienum', cnum, 10);
            this.empty();
            this.calc();
            $('.yoho-dialog').slideUp();
            $('.body-mask').css('height', lin);
        }
        shu1(xthis, csid, cnum) {
            var $this = xthis;
            let shu = 0;
            let lang = $(xthis).prev().val();
            lang++;
            $(xthis).prev().val(lang);
            shu = $(xthis).prev().val()
            let inx = $.inArray($(xthis).parents('.cart-table').attr('sid'), csid);
            cnum.splice(inx, 1, shu)
            this.myobj.addcookie('cookienum', cnum, 10);
            this.price(xthis, shu)

        }
        shu2(xthis, csid, cnum) {
            var $this = xthis;
            var shu1 = 0;
            var lang1 = $(xthis).next().val();
            lang1--;
            if (lang1 <= 0) {
                lang1 = 0
            }
            $(xthis).next().val(lang1);
            shu1 = $(xthis).next().val()
            var index = $.inArray($(xthis).parents('.cart-table').attr('sid'), csid);
            cnum.splice(index, 1, shu1)
            this.myobj.addcookie('cookienum', cnum, 10);
            this.price(xthis, shu1)
        }
        price(xthis, shu) {
            var $this = this
            var sidd = $(xthis).parents('.cart-table').attr('sid')
            $.ajax({
                url: '../../php/selectdata.php',
                data: {
                    sid: sidd
                },
                dataType: 'json'
            }).done(function (data) {
                let zmoney = (data.price * shu).toFixed(2);
                $(xthis).parents('.pre-sell-box').find('.product-price').find('.p-product-price').html(zmoney);
                $this.calc()
            });
        };
        quanxuan() {
            var $this = this;
            let $input = $('.promotion-pool input').not('.qx').not('.shuliang');//个人命名习惯.
            $('.qx').on('click', function () {
                if ($(this).prop('checked')) {//选中
                    $input.prop('checked', true);
                } else {
                    $input.prop('checked', false);
                }
                $this.calc()
            });
            if ($('.qx').prop('checked')) {
                $input.prop('checked', true);
            }

            $('.ic').on('click', function () {
                if ($('.promotion-pool input:checked').not('.qx').length === $input.length) {
                    $('.qx').prop('checked', true);
                } else {
                    $('.qx').prop('checked', false);
                }
                $this.calc();//重新计算
            });
        }
        showgoodslist(sid, num) {
            var $this = this
            $.ajax({
                url: '../../php/getshopdata.php',
                dataType: 'json'
            }).done(function (data) {
                let $strhtml = '';
                $.each(data, function (index, value) {
                    if (value.sid == sid) {
                        //对隐藏的元素进行克隆。
                        let $clonebox = $('.cart-table:hidden').clone(true, true);
                        $clonebox.attr('sid', value.sid);
                        $clonebox.find('.pay-pro .pay-pro-icon img').attr('src', value.url);

                        $clonebox.find('.pay-pro-info .titl').html(value.title);

                        $clonebox.find('.product-price .p-product-price').html(value.price)

                        $clonebox.find('.cart-num-cont input').val(num);
                        //计算总和：
                        let zmoney = (value.price * num).toFixed(2);
                        $clonebox.find('.p-product-price').html(zmoney);
                        $clonebox.css('display', 'block');
                        $('.cart-fixed-submit').before($clonebox);
                    }
                });
                $this.quanxuan()
                $this.calc()

            })
        }
        empty() {
            if (this.myobj.getcookie('cookiesid') && this.myobj.getcookie('cookienum')) {
                $('.shop-cart .order-pay ').hide();
                $('.cart-fixed-submit').show()

            } else {
                $('.shop-cart .order-pay ').show();
                $('.cart-fixed-submit').hide()
            }
        }
        calc() {
            let allprice = 0;//总价
            let allnum = 0;//总的数量。
            $('.cart-table:visible').each(function (index, element) {//遍历复选框是否选中
                if ($(element).find('.pre-sell-box').find('input').is(':checked')) {
                    allprice += parseInt($(element).find('.table').find('.pre-sell-box').find('.product-price').find('.p-product-price').html());
                    allnum += parseInt($(element).find('.table').find('.pre-sell-box').find('.adjust-cart-num').find('.cart-num-cont').find('input').val());
                }
            });
            $('.money').html('￥' + allprice);
            $('.select-num .ins').html(allnum);
        }
    }
    new cart().init()
})
