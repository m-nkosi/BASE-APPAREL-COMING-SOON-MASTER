$(document).ready(() => {
    const $form = $('form');
    const $email = $('#mail');
    const $errorIcon = $('#error');
    const $label = $('#labelDiv');

    // normal javaScript
    const email = document.getElementById('mail');

    $email.on('keyup', () => {
        // everytime a user types something check if the form is valid
        if (email.validity.valid)
        {
            $errorIcon.hide();
            $label.hide()

        }else{
            $errorIcon.show();
            $label.show();
        }
    })
})