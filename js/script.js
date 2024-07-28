// Check if the DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    // Couple references needed for usage
    const errorMessage = document.getElementById('error');
    const pw = document.getElementById('pw');
    const pwConfirm = document.getElementById('confirm-pw');

    pwConfirm.addEventListener('input', () => {
        if (pw.value === '' || pwConfirm.value === '') {
            pwConfirm.style.outlineColor = 'red';
            pw.style.outlineColor = 'red';
            errorMessage.textContent = "* Password fields cannot be empty";
            errorMessage.style.color = 'red';
        } else if (pw.value !== pwConfirm.value) {
            pwConfirm.style.outlineColor = 'red';
            pw.style.outlineColor = 'red';
            errorMessage.textContent = "* Passwords do not match";
            errorMessage.style.color = 'red';
        } else {
            pwConfirm.style.outlineColor = 'green';
            pw.style.outlineColor = 'green';
            errorMessage.textContent = "";
        }
    });
});