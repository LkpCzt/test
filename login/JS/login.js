$(function() {
	// 切换按钮
	var currentseletor = '#loginfrom';
	$("#tabbtnlogin").on('click', function(event) {
	    $("#tabbtnregis").removeClass('tabbtnselector');
	    $("#regisfrom").hide();
	    $("#loginfrom").show();
	    $(this).addClass('tabbtnselector');
	    currentseletor = '#loginfrom';
	});
	$("#tabbtnregis").on('click', function(event) {
	    $("#tabbtnlogin").removeClass('tabbtnselector');
	    $("#loginfrom").hide();
	    $("#regisfrom").show();
	    $(this).addClass('tabbtnselector');
	    currentseletor = '#regisfrom';
	});

    //找到文本框，并注册得到焦点事件
    $("input:text").focus(function() {
        $(this).addClass('baseinputselector');
    });
    $("input:password").focus(function() {
        $(this).addClass('baseinputselector');
    });
    //找到文本框，并注册失去焦点事件
    $("input:text").blur(function() {
        $(this).removeClass('baseinputselector');
    });
    $("input:password").blur(function() {
        $(this).removeClass('baseinputselector');
    });

    /**
     * 设置垂直居中
     */
    function fVericalAlignBody() {
        var nBodyHeight = 716;
        var nClientHeight = document.documentElement.clientHeight;
        if (nClientHeight >= nBodyHeight + 2) {
            var nDis = (nClientHeight - nBodyHeight) / 2;
            document.body.style.paddingTop = nDis + 'px';
        } else {
            document.body.style.paddingTop = '0px';
        }
    }
    fVericalAlignBody();
    // 监听可是区域大小改变
    window.onresize = function(){
    	fVericalAlignBody();
	}

    // IE8 兼容
    if (!!navigator.userAgent.match(/MSIE 8.0/)) {
        $(".myplaceholder").show();
        $('input[placeholder], textarea[placeholder]').each(function() {
            var input = $(this);
            if (input.val() === '' && input.attr("placeholder") !== '') {
                if (input.attr('placeholder') !== '请输入用户密码') {
                    input.addClass("placeholder").val(input.attr('placeholder'));
                }
            }

            input.focus(function() {
                if (input.val() === input.attr('placeholder')) {
                    input.val('');
                }
                if (input.attr('placeholder') === '请输入用户密码') {
                    var temp = currentseletor + ' .myplaceholder'
                    $(temp).hide();
                }
            });

            input.blur(function() {
                if (input.val() === '' || input.val() === input.attr('placeholder')) {
                    if (input.attr('placeholder') !== '请输入用户密码') {
                        input.val(input.attr('placeholder'));
                    } else {
                        var temp = currentseletor + ' .myplaceholder'
                        $(temp).show();
                    }

                }
            });
        });
        $('#loginfrom .myplaceholder').on('click', function(event) {
            $("#loginfrom input:password").focus();
        });

        $('#regisfrom .myplaceholder').on('click', function(event) {
            $("#regisfrom input:password").focus();
        });
    }
});
$(function() {
    $("#graphicVerificationCode").on('click', function(event) {
        console.log('123');
    });
})

