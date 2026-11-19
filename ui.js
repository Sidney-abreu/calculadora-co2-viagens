function mostrarResultado(dist, meio, emissao){
  document.getElementById('resultado').hidden = false;
  document.getElementById('comparacao').hidden = false;
  document.getElementById('creditos').hidden = false;
  document.getElementById('resDistancia').textContent = dist + ' km';
  document.getElementById('resMeio').textContent = meio;
  document.getElementById('resEmissao').textContent = emissao.toFixed(2) + ' kg CO2 (' + (emissao/1000).toFixed(3) + ' t)';
  const tbody = document.getElementById('tabelaComparacao');
  tbody.innerHTML = '';
  const barras = document.getElementById('barras');
  barras.innerHTML = '';
  let max = 0;
  const valores = {};
  for (const m of Object.keys(CONFIG.fatores)){
    const v = dist * CONFIG.fatores[m];
    valores[m]=v; if(v>max) max=v;
  }
  for (const m of Object.keys(valores)){
    const tr = document.createElement('tr');
    tr.innerHTML = '<td>'+m+'</td><td>'+valores[m].toFixed(2)+'</td>';
    if(m===meio) tr.style.fontWeight='bold';
    tbody.appendChild(tr);
    const div = document.createElement('div');
    div.textContent = m + ': ' + valores[m].toFixed(2) + ' kg';
    const bar = document.createElement('div');
    bar.className='barra';
    bar.style.width = (max>0 ? (valores[m]/max*100) : 0) + '%';
    barras.appendChild(div); barras.appendChild(bar);
  }
  const cred = calcularCreditos(emissao);
  document.getElementById('resCreditos').textContent = cred + ' crédito(s)';
  document.getElementById('resCusto').textContent = 'R$ ' + calcularCusto(cred).toFixed(2).replace('.',',');
}
function mostrarAviso(msg){ document.getElementById('aviso').textContent = msg; }
