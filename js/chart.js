document.addEventListener("DOMContentLoaded", function () {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    const ctx2 = document.getElementById('chart2').getContext('2d');
    const ctx3 = document.getElementById('chart3').getContext('2d');
    const ctx4 = document.getElementById('chart4').getContext('2d');
    const ctx5 = document.getElementById('chart5').getContext('2d');

    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Without Treatment', 'With Treatment'],
            datasets: [{
                label: 'Mortality Rate (%)',
                data: [20, 2.5],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
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

    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Full Recovery', 'Partial Recovery', 'No Recovery'],
            datasets: [{
                label: 'Recovery Outcomes',
                data: [60, 30, 10],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Recovery Outcomes'
                }
            }
        }
    });

    new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ['Deaths by Suicide', 'Other Causes'],
            datasets: [{
                label: 'Causes of Death in Anorexia',
                data: [20, 80],
                backgroundColor: ['rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Causes of Death in Anorexia'
                }
            }
        }
    });

    new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ['Females', 'Males'],
            datasets: [{
                label: 'Lifetime Prevalence of Eating Disorders (%)',
                data: [8.60, 4.07],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Lifetime Prevalence of Eating Disorders'
                }
            }
        }
    });

        new Chart(ctx5, {
            type: 'pie',
            data: {
                labels: ['Disordered Eating', 'No Disordered Eating'],
                datasets: [{
                    label: 'Disordered Eating in Children and Adolescents (%)',
                    data: [22, 78],
                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Disordered Eating in Children and Adolescents'
                    }
                }
            }
        });
    });