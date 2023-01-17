import createChart from './utils/createChart.js';
import createTableData from './utils/createTable.js';
import searchBarHandler from './utils/searchBarHandler.js';

// --- Search bar component ---
searchBarHandler();

const rowData = [
  { coin: 'Bitcoin', currency: 'BTC', price: 10000 },
  { coin: 'Ethereum', currency: 'ETH', price: 20000 },
  { coin: 'Litecoin', currency: 'LTC', price: 30000 },
  { coin: 'Bitcoin Cash', currency: 'BCH', price: 40000 },
  { coin: 'Cardano', currency: 'ADA', price: 50000 }
];

// --- Chart component ---
createChart({ data: rowData });

// --- Table component ---
/* 
    This is a test to see if the table works with mock data
    You should create/check a loading state and then call the function
*/
document.addEventListener('DOMContentLoaded', () => {
  const columnDefs = [
    { field: 'coin', flex: 1 },
    { field: 'currency', flex: 1 },
    { field: 'price', flex: 1, sortable: true }
  ];

  createTableData({ columnDefs, rowData });
});
