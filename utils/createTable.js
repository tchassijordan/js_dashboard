export default function createTable({ columnDefs, rowData }) {
  const tableRootElt = document.querySelector('#table_root');
  const gridOptions = { columnDefs, rowData };
  new agGrid.Grid(tableRootElt, gridOptions);
}
