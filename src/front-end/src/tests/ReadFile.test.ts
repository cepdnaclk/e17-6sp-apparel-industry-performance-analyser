import { read, WorkBook } from "xlsx";
import { handleFile } from "../util/ReadData";
import * as fs from "fs";

test("should throw error for invalid type", async () => {
  const workbook = read("invalidData", { sheetRows: 11 });
  expect(() => {
    handleFile(workbook, (a) => {});
  }).toThrow(TypeError);
});
