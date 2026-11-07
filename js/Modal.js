const openButtons = document.querySelectorAll('.vendidos-btn, .destacados-btn');
const modalList = document.querySelectorAll('.modal');

function getModalByButton(button) {
    const modalId = button.dataset.modal;

    if (!modalId) return null;

    if (document.getElementById(modalId)) {
        return document.getElementById(modalId);
    }

    if (modalId.startsWith('modal-')) {
        return document.getElementById(modalId);
    }

    return document.getElementById(`modal-${modalId}`);
}

openButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const modal = getModalByButton(button);
        if (modal) {
            modal.classList.add('modal--show');
        }
    });
});

document.querySelectorAll('.modal_close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = closeBtn.closest('.modal');
        if (modal) {
            modal.classList.remove('modal--show');
        }
    });
});

modalList.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('modal--show');
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modalList.forEach(modal => modal.classList.remove('modal--show'));
    }
});