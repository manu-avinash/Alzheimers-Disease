import cv2,os
from pathlib import Path
import numpy as np
from tensorflow.keras.models import load_model
curr_dir=Path(__file__).resolve()
MODEL_PATH=os.path.join(curr_dir.parent,'Alzheimer.keras')
IMG_SIZE=(150,150)
# Class labels of the model
class_labels = ["Alzheimer's Disease", "Cognitively Normal", 
                "Early Mild Cognitive Impairment (EMCI)", 
                "Late Mild Cognitive Impairment (LMCI)"]
def diagnose(img):
    # Model loading
    model=load_model(MODEL_PATH)
    # Img preprocessing
    img=cv2.resize(img,IMG_SIZE)
    img = np.expand_dims(img, axis=0)
    img = img / 255.0  
    # Prediction workflow
    predictions = model.predict(img)
    predicted_class = np.argmax(predictions[0])
    confidence = np.max(predictions[0])   
    return (
        class_labels[predicted_class],
        float(round(confidence,4)*100)
    )
