import { read, WorkBook } from "xlsx";
import { getKpiData } from "../util/ReadData";
import * as fs from "fs";

test("should throw error for invalid type", async () => {
  const workbook = read("invalidData", { sheetRows: 11 });
  expect(() => {
    getKpiData(workbook);
  }).toThrow(TypeError);
});
