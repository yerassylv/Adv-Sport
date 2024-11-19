document.addEventListener('DOMContentLoaded', function () {
    const checkStatusBtn = document.getElementById('checkStatusBtn');
    const alertOverlay = document.getElementById('customAlertOverlay');
    const alertMessage = document.getElementById('alertMessage');
    const closeAlertButton = document.getElementById('closeAlertButton');
    const workingStatus = document.getElementById('workingStatus');

    checkStatusBtn.addEventListener('click', function () {
        const now = new Date();
        const hour = now.getHours();

        if (hour >= 9 && hour < 18) {
            workingStatus.textContent = 'We are open!';
            workingStatus.style.color = '#28a745';
            alertMessage.textContent = 'We are open!';
        } else {
            workingStatus.textContent = 'We are closed.';
            workingStatus.style.color = '#dc3545';
            alertMessage.textContent = 'We are closed.';
        }

        alertOverlay.classList.add('active');
    });

    closeAlertButton.addEventListener('click', function () {
        alertOverlay.classList.remove('active');
    });
});