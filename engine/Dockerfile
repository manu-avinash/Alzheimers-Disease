FROM python:3.13-slim

WORKDIR /engine

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

WORKDIR /engine/fastapi

EXPOSE 8000

CMD [ "uvicorn","alzheimer_api:app","--host","0.0.0.0","--port","8000" ]