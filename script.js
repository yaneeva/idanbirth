document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const startDate = new Date('2024-06-10T00:00:00');
        const now = new Date();

        const timeDifference = now - startDate;
        
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('timePassed').textContent = 
            `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }

    updateTime(); // Initial call to display immediately
    setInterval(updateTime, 1000); // Update every second
});
