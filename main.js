const toggle = document.getElementById('darkmode-toggle');

toggle.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.style.transition = 'background-color 0.3s ease';
    }
});
