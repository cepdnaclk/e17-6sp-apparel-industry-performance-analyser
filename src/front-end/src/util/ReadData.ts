import { utils, read, WorkBook } from "xlsx";
import getRowData from "./getRowData";

export const ReadFile = async (file: File) => {
  const data = await file.arrayBuffer();
  /* data is an ArrayBuffer */
  const workbook = read(data, { sheetRows: 11 });

  return workbook;
};

export const getKpiData = (workbook: WorkBook) => {
  const kpiSheet = workbook.Sheets[workbook.SheetNames[1]];
  const kpiData: any[] = utils.sheet_to_json(kpiSheet, { header: 1 });
  const otdRowData = getRowData(kpiData[5]); //On Time Delivery
  const osrRowData = getRowData(kpiData[6]); //Order-Ship Ratio
  const csrRowData = getRowData(kpiData[7]); //Cut-Ship Ratio

  const otd = otdRowData.slice(2, 20).concat(otdRowData.slice(22, 34));
  const osr = osrRowData.slice(2, 20).concat(osrRowData.slice(22, 34));
  const csr = csrRowData.slice(2, 20).concat(csrRowData.slice(22, 34));

  const kpis = [otd, osr, csr];

  return kpis;
};
