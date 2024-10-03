window.onload = function() {
    // Overproduction Alerts Bar Chart
    var ctxOverproduction = document.getElementById('overproductionChart').getContext('2d');
    var overproductionChart = new Chart(ctxOverproduction, {
        type: 'bar',
        data: {
            labels: ['Maize', 'Beans', 'Wheat', 'Sorghum'],
            datasets: [{
                label: 'Overproduction Risk (%)',
                data: [80, 50, 30, 15], // Risk percentages for overproduction
                backgroundColor: 'rgba(255, 99, 132, 0.7)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Underproduction Alerts Bar Chart
    var ctxUnderproduction = document.getElementById('underproductionChart').getContext('2d');
    var underproductionChart = new Chart(ctxUnderproduction, {
        type: 'bar',
        data: {
            labels: ['Maize', 'Beans', 'Wheat', 'Sorghum'],
            datasets: [{
                label: 'Underproduction Risk (%)',
                data: [20, 30, 60, 80], // Risk percentages for underproduction
                backgroundColor: 'rgba(54, 162, 235, 0.7)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Validate Land Allocation
function validateLandAllocation() {
    const totalLand = parseInt(document.getElementById('total-land').innerText);
    const maizeLand = parseInt(document.getElementById('maize-land').value);
    const beansLand = parseInt(document.getElementById('beans-land').value);
    const wheatLand = parseInt(document.getElementById('wheat-land').value);
    const sorghumLand = parseInt(document.getElementById('sorghum-land').value);

    const allocatedLand = maizeLand + beansLand + wheatLand + sorghumLand;

    if (allocatedLand > totalLand) {
        document.getElementById('land-error').innerText = `Allocated land exceeds total land (${totalLand} acres). Please adjust the allocation.`;
        document.getElementById('land-error').style.display = 'block';
    } else {
        document.getElementById('land-error').style.display = 'none';
        alert('Crop selection and land allocation submitted successfully.');
    }
}
