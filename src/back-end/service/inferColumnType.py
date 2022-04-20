import pandas as pd
from typing import Union, IO


def inferColumnType(filePath: Union[str, IO], sheetName=0, skipRows=2):
    """
    Infers the type of the columns
    :param filePath: path to the excel file
    :param sheetName:
    :param skipRows: Number of rows in the top to skip
    :return: column name and the type as a dictionary
    """
    df = pd.read_excel(filePath, sheet_name=sheetName, skiprows=skipRows).dropna(how='all')
    result = {col: infered.name for col, infered in dict(df.dtypes).items()}
    print(result)
    return result
