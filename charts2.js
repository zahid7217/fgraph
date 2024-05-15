const ctx2 = document.getElementById('doughnut').getContext('2d');

const doughnut = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['chrome', 'firefox', 'Microsoft Edge', 'Opera', 'Pale Moon', 'Safari'],
        datasets: [{
            label: 'Safeviews by browsers',
            data: [Math.floor((Math.random() * 100000) + 1), Math.floor((Math.random() * 80000) + 1), Math.floor((Math.random() * 70000) + 1), Math.floor((Math.random() * 60000) + 1), Math.floor((Math.random() * 10000) + 1), Math.floor((Math.random() * 50000) + 1)],
            backgroundColor: [
                'rgba(255,99,132,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(255,206,86,0.2)',
                'rgba(75,192,192,0.2)',
                'rgba(153,102,255,0.2)',
                'rgba(255,159,64,0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
                'rgba(255,159,64,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});