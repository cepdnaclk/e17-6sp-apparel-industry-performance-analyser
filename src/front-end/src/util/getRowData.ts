const getRowData = (row: any[]) => {
  //returns a data in a specific row as an array
  const row_data: String[] = [];
  row.map((item: any) => row_data.push(item));
  return row_data;
};

export default getRowData;
