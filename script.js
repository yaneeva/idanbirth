document.addEventListener('DOMContentLoaded', function() {
    const startDate = new Date('2024-06-10');
    const today = new Date();
    const timeDifference = today - startDate;
    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById('daysPassed').textContent = `${daysPassed} days`;
});
