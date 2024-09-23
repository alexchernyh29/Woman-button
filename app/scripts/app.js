import $ from 'jquery';

$(() => {
	$('.main__blur-button').click(function() {
        const button = $('.main__blur-button');
        const popup = $('.main__popup');
        const bt = $('.main__blur-button span');
        const buttonText = button.text();

        navigator.clipboard.writeText(buttonText).then(() => {
            console.log('Текст успешно скопирован в буфер обмена');
        }).catch(err => {
            console.error('Не удалось скопировать текст: ', err);
        });

        bt.css('filter', 'none');

        popup.fadeIn();

        setTimeout(function() {
            popup.fadeOut();
        }, 4000);
    });
});
