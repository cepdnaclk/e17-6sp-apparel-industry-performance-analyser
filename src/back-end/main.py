from typing import Optional
from fastapi import FastAPI, File, UploadFile
from model.dataModels import Item
from service.validate import validate
from service.inferColumnType import inferColumnType
import aiofiles
from os.path import exists

app = FastAPI()


# -------------
# ML endpoints
# -------------
# POST validate : validate input data, return error/ success messages
# GET train : starts training, return details 
# GET predict : make predictions, return details
# 

@app.get("/")
def read_root():
    return {"Status": "Up"}


# accepted filetypes: csv, xslx
@app.post("/validate/")
async def create_upload_file(file: UploadFile):
    if not file:
        return {"message": "No upload file sent"}
    else:
        return validate(file)


@app.post("/saveFile")
async def post_endpoint(in_file: UploadFile):
    async with aiofiles.open("tempFile.xlsx", 'wb') as out_file:
        while content := await in_file.read(1024):  # async read chunk
            await out_file.write(content)  # async write chunk

    return {"Result": "File Saved"}


# accepted filetypes: xslx
@app.get("/inferTypes/")
async def infer_type_from_file():
    if not exists("tempFile.xlsx"):
        return {"message": "No upload file sent. use saveFile endpoint first"}
    else:
        return inferColumnType("tempfile.xlsx", sheetName='FLEECE')
