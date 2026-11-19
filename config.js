const CONFIG = {
  precoCredito: 25,
  fatores: { bicicleta: 0, carro: 0.17, onibus: 0.05, caminhao: 0.80 },
  rotas: {
    "São Paulo|Rio de Janeiro": 430,
    "Rio de Janeiro|São Paulo": 430,
    "Rio de Janeiro|Niterói": 13,
    "Niterói|Rio de Janeiro": 13,
    "Rio de Janeiro|Nilópolis": 28,
    "Nilópolis|Rio de Janeiro": 28,
    "São Paulo|Campinas": 100,
    "Campinas|São Paulo": 100,
    "Belo Horizonte|Brasília": 716,
    "Brasília|Belo Horizonte": 716,
    "Salvador|Recife": 839,
    "Recife|Salvador": 839,
    "Curitiba|São Paulo": 408,
    "São Paulo|Curitiba": 408,
    "Porto Alegre|Curitiba": 711,
    "Curitiba|Porto Alegre": 711,
    "Fortaleza|Recife": 800,
    "Recife|Fortaleza": 800,
    "Goiânia|Brasília": 209,
    "Brasília|Goiânia": 209
  },
  cidades: ["São Paulo","Rio de Janeiro","Belo Horizonte","Brasília","Salvador","Curitiba","Porto Alegre","Recife","Fortaleza","Manaus","Goiânia","Campinas","Niterói","Nilópolis","Duque de Caxias"]
};