from fastapi import File, UploadFile
import pandas as pd


def validate(file: UploadFile):
    try:
        if file.content_type == 'application/vnd.ms-excel':
            dataFrame = pd.read_csv(file.file)
            return { str(dataFrame.shape()) }
        elif file.content_type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            dataFrame = pd.read_excel(file.file)
            return { str(dataFrame.shape()) }
        # TODO validate column datatypes
        else :
            return {"Unsupported file format!": file.content_type}
    except Exception as e:
        return { e }
