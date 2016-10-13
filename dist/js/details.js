'use strict';

{
    (function () {

        // 影视详情页
        var $details = $('.details');

        // 简介
        $details.on('click', '.button-group .btn', function () {
            var $this = $(this);
            // 立即购买
            if ($this.hasClass('buy')) {
                $.msg('您还不是会员，无法购买，先长按页面下方二维码成为会员吧！');
            }

            // 加入购物车
            if ($this.hasClass('cart')) {
                $.msg('您还不是会员，无法购买，先长按页面下方二维码成为会员吧！');
            }
        });

        // 选集
        $details.on('click', '.num', function () {
            var buttons = [{
                text: '主线资源',
                // bold: true,
                // color: 'danger',
                onClick: function onClick() {
                    $.alert("你选择了“主线资源“");
                }
            }, {
                text: '备用地址1',
                onClick: function onClick() {
                    $.alert("你选择了“备用地址1“");
                }
            }, {
                text: '备用地址2',
                onClick: function onClick() {
                    $.alert("你选择了“备用地址2“");
                }
            }, {
                text: '取消'
            }];
            $.actions(buttons);
        });

        // 我要报错
        var $feedback = $('#detail-tab3');
        var $subText = $feedback.find('.sub-text');
        $feedback.on('click', '.sub-tag span', function () {
            $subText.val($subText.val() + '#' + $(this).text() + '#');
        });
    })();
}
//# sourceMappingURL=details.js.map
