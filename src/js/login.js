!function ($) {
    class login {
        constructor() {
            this.user = $('#account1');
            this.pass = $('#password');
            this.btn = $('#login-btn');
            this.sid=0
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
                    addcookie(key, '', -1);
                }
            }
        }
        init() {
            var $this = this;
            this.btn.on('click', function () {
                $this.dl()
            });
        }
        dl() {
            var $this=this;
            $.ajax({
                type: 'post',
                url: '../../php/login.php',
                data: {
                    user: this.user.val(),
                    pass: this.pass.val(),
                },
                success: function (data) {
                    if (!data) {
                        alert('用户名和密码错误');
                    } else {
                        location.href='http://10.31.157.57/yoho/src/html/homepage.html';
                        $this.myobj.addcookie('yhuser',$this.user.val(),10);
                        $('.yhuser').html($this.user.val())
                        // localStorage.setItem('customname',$($this.user).val());
                    }
                }
            });
        }
        // dll() {
        //     var $this = this;
        //     $.ajax({
        //         type: 'post',
        //         url: '../../php/selectuser.php',
        //         data: {
        //             user: this.user.val(),
        //         },
        //         dataType: 'json',
        //         success: function (data) {
        //             $this.sid=data.sid
        //             $this.ykzt(data.sid)
        //         }
        //     });
        // }
        // dll(){
        //    this.myobj.addcookie('yhuser',this.user.val(),10);
        //    $('.yhuser').html(this.user.val())
        // }
        // ykzt($sid) {
        //     $.ajax({
        //         url: '../../php/selsecusersid.php',
        //         data: {
        //             sid: $sid
        //         },
        //         dataType: 'json'
        //     }).done(function (data) {
        //         console.log(data)
        //         $('.yhuser').html(data.user);
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
        // }
    }
    new login().init()
}(jQuery);
// ykzt()
//用户状态函数封装
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