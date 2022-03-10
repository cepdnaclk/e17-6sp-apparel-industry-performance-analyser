import {utils,read} from 'xlsx';


type ReadExcelProps = {
    getKpiData:(kpis:String[][])=>void;
}

export const ReadData = (props:ReadExcelProps) => {
    const  handleFile = async (e:any) => {
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        /* data is an ArrayBuffer */
        const workbook = read(data, {sheetRows: 11});
        const kpiSheet = workbook.Sheets[workbook.SheetNames[1]];
        const kpiData: any[] = utils.sheet_to_json(kpiSheet, {header:1});
        const otdRowData = getRowData(kpiData[5]); //On Time Delivery
        const osrRowData = getRowData(kpiData[6]); //Order-Ship Ratio
        const csrRowData = getRowData(kpiData[7]); //Cut-Ship Ratio

        const otd = (otdRowData.slice(2,20)).concat(otdRowData.slice(22,34));
        const osr = (osrRowData.slice(2,20)).concat(osrRowData.slice(22,34));
        const csr = (csrRowData.slice(2,20)).concat(csrRowData.slice(22,34));

        const kpis = [
            otd,osr,csr
        ]

        props.getKpiData(kpis);

    }

    const getRowData = (row:any[]) => { //returns a data in a specific row as an array
        const row_data:String[] = [];
        row.map((item:any) => row_data.push(item));
        return row_data; 
    }

    return(
        <div>
            <h2>Add File</h2>
            <input type="file" accept="xlsx" multiple={false} onChange = {(e) => handleFile(e)}  />
        </div>
    );
};






