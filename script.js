document.addEventListener('DOMContentLoaded', function () {
    const bellIcon = document.getElementById('bell-icon');
    const redDot = document.getElementById('red-dot');

    // Function to show the red dot
    function showNotificationDot() {
        redDot.style.display = 'block';
    }

    // Function to hide the red dot
    function hideNotificationDot() {
        redDot.style.display = 'none';
    }

    // Simulate showing the notification dot after 2 seconds
    setTimeout(showNotificationDot, 2000);

    // Click event to hide the red dot when the bell icon is clicked
    bellIcon.addEventListener('click', hideNotificationDot);
});
const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Job Applied',
            type: 'bar',
            data: [55, 60, 65, 59, 42, 48, 68, 77, 62, 59, 61, 77],
            backgroundColor: '#5932EA',
            borderWidth: 1,
            barThickness: 50,
            categoryPercentage: 0.9,
            barPercentage: 1,
            borderRadius: 5,
        },
        {
            label: 'Job View',
            type: 'bar',
            data: [63, 78, 85, 75, 58, 59, 100, 95, 80, 62, 83, 81],
            backgroundColor: '#F2EFFF',

            borderWidth: 1,
            barThickness: 50,
            categoryPercentage: 0.9,
            barPercentage: 1,
            borderRadius: 5,
        },

    ],
};

const barConfig = {
    type: 'bar',
    data: barData,
    options: {
        indexAxis: 'x',
        plugins: {
            title: {
                display: true,
                text: 'Job Statistics',
                font: {
                    size: 22.4,
                    weight: 'bold',
                },
            },
            align: 'start',
            padding:{
                top: 100,
                bottom: 50,
            },
            legend: {
                display: true,
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                cornerRadius: 5,
                titleFont: {
                    size: 14,
                    weight: 'bold',
                },
                bodyFont: {
                    size: 12,
                },
            },
        },
        scales: {
            y: {
                stacked: false,
                beginAtZero: false,
                min: 20,
                max: 100,
                grid: {
                    display: true,
                    drawTicks: false,
                    drawBorder: false,
                    color: '#e5e5e5',
                },
                ticks: {
                    stepSize: 20,
                    font: {
                        size: 12,
                    },
                },
            },
            x: {
                stacked: true,
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 12,
                    },
                },
            },
        },
    },
};

const barCtx = document.getElementById('miChart').getContext('2d');
const miChart = new Chart(barCtx, barConfig);

// Doughnut Chart Configuration
const doughnutData = {
    labels: ["65%", "35%"],
    datasets: [{
        backgroundColor: ["#16C098", "#5932EA"],
        data: [65, 35]
    }]
};

const doughnutConfig = {
    type: 'doughnut',
    data: doughnutData,
    options: {
        title: {
            display: false,
            text: "World Wide Wine Production 2018"
        }
    }
};

const doughnutCtx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(doughnutCtx, doughnutConfig);

// Dougnut

document.addEventListener('DOMContentLoaded', () => {
    const percentageElement = document.querySelector('.percentage');
    const percentage = 35; // You can set this dynamically
    percentageElement.textContent = `${percentage}%`;
});
document.addEventListener('DOMContentLoaded', () => {
    const percentageElement = document.querySelector('.percentage');
    const percentage = 65; // You can set this dynamically
    percentageElement.textContent = `${percentage}%`;
});