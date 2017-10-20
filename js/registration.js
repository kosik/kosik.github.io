;(function(){
	'use strict';

    $('#registration #_to-step-2').on('click', function(){
        $('._steps-container ._step').removeClass('active')
        $('._step-title').text('Заполните следующие поля:')
        $('._steps-container ._step-2').addClass('active')
    })

    $('#registration #_to-login').on('click', function(){
        $('._steps-container ._step').removeClass('active')
        $('._window-title').text('Вход')
        $('._step-title').text('Введите данные для входа:')
        $('._steps-container ._step-login').addClass('active')
    })

    $('#registration ._select-account-type').on('click', function(){
        $('._account-type').removeClass('active')
        $('._account-type._' + $(this).attr('type')).addClass('active')
    })
})();
