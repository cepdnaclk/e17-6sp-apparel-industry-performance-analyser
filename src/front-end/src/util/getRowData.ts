const getRowData = (row: any[]) => {
  //returns a data in a specific row as an array
  const row_data: String[] = [];
  try {
    row.map((item: any) => row_data.push(item));
  } catch (Error) {
    throw new TypeError("File format is incorrect");
  }
  return row_data;
};

export default getRowData;
