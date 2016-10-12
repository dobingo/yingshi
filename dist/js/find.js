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

        $selectSwitch.picker({
            toolbarTemplate: '<header class="bar bar-nav">\n            <button class="button button-link pull-left">按钮</button>\n            <button class="button button-link pull-right close-picker">确定</button>\n            <h1 class="title">标题</h1>\n            </header>',
            cols: [{
                textAlign: 'center',
                values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
            }]
        });
    })();
}
//# sourceMappingURL=find.js.map
