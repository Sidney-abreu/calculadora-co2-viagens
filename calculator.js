function calcularDistancia(origem, destino, manual, usarManual){
  if (usarManual) return Number(manual);
  return CONFIG.rotas[origem + "|" + destino] ?? null;
}
function calcularEmissao(distancia, meio){
  return distancia * CONFIG.fatores[meio];
}
function calcularCreditos(emissaoKg){
  if (emissaoKg <= 0) return 0;
  return Math.ceil(emissaoKg / 1000);
}
function calcularCusto(creditos){
  return creditos * CONFIG.precoCredito;
}