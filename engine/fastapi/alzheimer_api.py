import sys,os
from pathlib import Path
# Adjusting path for module access
curr_dir=Path(__file__).resolve()
sys.path.append(os.path.join(curr_dir.parents[1],'model'))
import cv2, numpy as np
from fastapi import FastAPI,File
from fastapi.middleware.cors import CORSMiddleware   
from fastapi.responses import JSONResponse
from predict import diagnose

#API application
app=FastAPI()
# IP requests accessing the api
app.add_middleware(CORSMiddleware,allow_origins=["*"],allow_credentials=True,allow_methods=["*"],allow_headers=["*"])

# End points
@app.post('/diagnose')
def diag_endpoint(img:bytes=File(...)):
    scan=cv2.imdecode(np.frombuffer(img,np.uint8),cv2.IMREAD_COLOR)
    diagnosis,confidence=diagnose(scan) # predict function call
    return JSONResponse(content={
        'message':'Diagnose',
        'diagnosis':diagnosis,
        'confidence':confidence
    })
