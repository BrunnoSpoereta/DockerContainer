from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def boas_vindas():
    return 'Seja bem vindo à API em Python!'

@app.get("/calcula-frete")
def calculafrete():
    return 'Frete calculado com sucesso'