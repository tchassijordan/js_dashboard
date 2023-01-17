export default function createChart({ data }) {
  const chartRootElt = document.getElementById('chart_root');

  const createChartKey = ({ data }) => {
    const key = data.map((item) => item.coin);
    return key;
  };

  const createChartBarVal = ({ data }) => {
    const value = data.map((item) => item.price);
    return value;
  };

  new Chart(chartRootElt, {
    type: 'bar',
    data: {
      labels: createChartKey({ data }),
      datasets: [
        {
          label: 'Price',
          data: createChartBarVal({ data }),
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
