// Search bar component
const searchBar = document.getElementById('dropbox_search_bar');
searchBar.addEventListener('keyup', (e) => {
  const searchValue = e.target.value;
  const dropboxItems = document.querySelectorAll('.dropbox_item');
  dropboxItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchValue.toLowerCase())) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });

  dropboxItems.forEach((item) => {
    item.addEventListener('click', () => {
      searchBar.textContent = item.innerText;
    });
  });
});

//Handle focus on search bar
searchBar.addEventListener('focus', () => {
  const dropboxList = document.querySelector('.dropbox_list');
  dropboxList.classList.remove('hidden');
});

//Handle blur on search bar
searchBar.addEventListener('blur', () => {
  const dropboxList = document.querySelector('.dropbox_list');
  dropboxList.classList.add('hidden');
});

// Chart component
const ctx = document.getElementById('chart_root');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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

// Table component
const columnDefs = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];

// specify the data
const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxster', price: 72000 }
];

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
  const gridDiv = document.querySelector('#table_root');

  new agGrid.Grid(gridDiv, gridOptions);
});
