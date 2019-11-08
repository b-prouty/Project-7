var trafficChart = document.getElementById('traffic-chart').getContext('2d');
var alertContainer= document.querySelector('.alert-dash');
var alertButton = document.querySelector('.close-button');

alertButton.addEventListener('click', () => {
    alertContainer.style.opacity = '0';
  alertContainer.style.visibility = 'hidden';
});

var chart = new Chart(trafficChart, {
  type: 'line',

  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24'],
    datasets: [{
      label: '',
      backgroundColor: '#eee',
      borderColor: '#7477BF',
      data: [0, 10, 5, 18, 45, 20, 10, 50, 10, 26, 63]
    }]
  },
  options: {}
});

var dailyChart = document.getElementById('daily-chart').getContext('2d');
var chart2 = new Chart(dailyChart, {
type: 'bar',
data: {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{

      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: '#7477BF',
      borderWidth: 1
  }]
},
options: {
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
}
});


var userChart = document.getElementById('user-chart').getContext('2d');
var chart3 = new Chart(userChart, {
type: 'doughnut',
data: {
    labels: ['Phones', 'Tablets', 'Desktops'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: ['#81C98F', '#74B1BF', '#7477BF'],
        borderColor: ['#81C98F', '#74B1BF', '#7477BF'],
        data: [ 40, 45, 147]
    }]
},
options: {
  cutoutPercentage: 60,
  animation: {
    animateScale: true
  },
  legend : {
    display: true
  }
}
});
