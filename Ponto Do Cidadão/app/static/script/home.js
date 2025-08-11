document.addEventListener('DOMContentLoaded', function () {
    // Como não podemos usar diretamente Jinja no arquivo JS, passamos a variável via atributo data no HTML
    const flashedMessagesData = document.body.getAttribute('data-flashed-messages');
    const flashedMessages = flashedMessagesData ? JSON.parse(flashedMessagesData) : [];

    const hasSuccess = flashedMessages.some(([category, _]) => category === 'success');

    if (hasSuccess) {
        Swal.fire({
            title: 'Obrigado!',
            text: 'Seu formulário foi enviado com sucesso.',
            icon: 'success',
            showConfirmButton: true,
            timer: 3000,
            timerProgressBar: true,
            showCloseButton: true,
            customClass: {
                popup: 'swal-dark-popup',
                title: 'swal-dark-title',
                content: 'swal-dark-content',
                confirmButton: 'swal-dark-btn',
                closeButton: 'swal-dark-close-btn'
            }
        }).then(() => {
            if (window.history.replaceState) {
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        });
    }
});
