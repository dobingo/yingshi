'use strict';

$.msg = function (opts, timeout) {
    var text = opts.text || opts;
    var title = opts.title || '温馨提示';
    timeout = opts.timeout || 2000;

    var $tpl = $('\n        <div class="mask">\n            <div class="msg">\n                <p class="msg-title">' + title + '</p>\n                <span class="msg-text">' + text + '</span>\n            </div>\n        </div>\n    ');

    $('body').append($tpl);

    if (timeout) {
        setTimeout(function () {
            $tpl.remove();
        }, timeout);
    }
};
//# sourceMappingURL=public.js.map
