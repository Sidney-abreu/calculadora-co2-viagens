document.addEventListener('DOMContentLoaded', () => {
  const datalist = document.getElementById('cidades');
  CONFIG.cidades.forEach(c => { const o=document.createElement('option'); o.value=c; datalist.appendChild(o); });
  document.getElementById('btnCalcular').addEventListener('click', () => {
    const origem = document.getElementById('origem').value.trim();
    const destino = document.getElementById('destino').value.trim();
    const usarManual = document.getElementById('usarManual').checked;
    const manual = document.getElementById('distManual').value;
    const meio = document.getElementById('meio').value;
    if (!usarManual && origem && destino && origem === destino){ mostrarAviso('Origem e destino não podem ser iguais.'); return; }
    const dist = calcularDistancia(origem, destino, manual, usarManual);
    if (dist === null || !dist || dist <= 0){ mostrarAviso('Rota não encontrada. Marque "Usar distância manual" e digite a distância em km.'); return; }
    mostrarAviso('');
    mostrarResultado(dist, meio, calcularEmissao(dist, meio));
  });
  document.getElementById('btnLimpar').addEventListener('click', () => {
    ['origem','destino','distManual'].forEach(id => document.getElementById(id).value='');
    document.getElementById('usarManual').checked=false;
    ['resultado','comparacao','creditos'].forEach(id => document.getElementById(id).hidden=true);
    mostrarAviso('');
  });
});