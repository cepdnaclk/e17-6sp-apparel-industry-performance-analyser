from typing import Optional
from fastapi import FastAPI, File, UploadFile
from model.dataModels import Item
from service.validate import validate


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
        