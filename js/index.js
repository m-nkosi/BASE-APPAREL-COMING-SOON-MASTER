$(document).ready(() => {
    const $form = $('form');
    const $email = $('#mail');
    const $errorIcon = $('#error');
    const $label = $('#labelDiv');

    // normal javaScript
    const email = document.getElementById('mail');

    $form.on('submit', () => {
        // everytime a user types something check if the form is valid
        if (!email.validity.valid || email.value =="" || email.value == null)
        {
            $errorIcon.show();
            $label.show();
            $email.addClass('inputError');
            return false;

        }else{
            $errorIcon.hide();
            $label.hide();
            email.removeClass('inputError');
        }
    })
})