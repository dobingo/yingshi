'use strict';

{
    (function () {
        var $selectSwitch = $('.select-switch');
        $selectSwitch.on('click', function (e) {
            e.stopPropagation();
            var $this = $(this);
            var $thisArrow = $this.find('.fa');
            $selectSwitch.find('.fa').not($thisArrow).removeClass('isopen');
            $thisArrow.toggleClass('isopen');
            $selectSwitch.not($this).picker('close');
            if (!$thisArrow.hasClass('isopen')) {
                setTimeout(function () {

                    $this.picker("close");
                });
            }
        });

        $selectSwitch.eq(0).picker({
            toolbarTemplate: '<header class="find-select"></header>',
            cols: [{
                textAlign: 'center',
                values: ['更新时间', '人气排行']
            }],
            onClose: function onClose() {
                // console.log('默认排序picker关闭');
            }
        });
        $selectSwitch.eq(1).picker({
            toolbarTemplate: '<header class="find-select"></header>',
            cols: [{
                textAlign: 'center',
                values: ['全部', '内地', '韩国']
            }],
            onClose: function onClose() {}
        });
        $selectSwitch.eq(2).picker({
            toolbarTemplate: '<header class="find-select"></header>',
            cols: [{
                textAlign: 'center',
                values: ['全部', '电视剧', '电影']
            }],
            onClose: function onClose() {}
        });
    })();
}
//# sourceMappingURL=find.js.map