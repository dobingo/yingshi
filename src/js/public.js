$.msg = function(opts, timeout) {
    let text = opts.text || opts
    let title = opts.title || '温馨提示'
    timeout = opts.timeout || 2000

    let $tpl = $(`
        <div class="mask">
            <div class="msg">
                <p class="msg-title">${title}</p>
                <span class="msg-text">${text}</span>
            </div>
        </div>
    `);

    $('body').append($tpl)

    if (timeout) {
        setTimeout(function() {
            $tpl.remove()
        }, timeout);
    }
}
