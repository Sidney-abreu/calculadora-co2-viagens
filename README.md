# Calculadora de CO2 - Viagens

## O que a calculadora faz e como usar
Calcula a emissão de CO2 de uma viagem e quanto custa compensar. Escolha origem e destino com autocompletar, ou marque "Usar distância manual" e digite a distância. Escolha o meio (bicicleta, carro, ônibus, caminhão) e clique em Calcular.

## Como o cálculo funciona
Emissão (kg) = distância (km) × fator de emissão. Fatores: bicicleta 0, carro 0.17, ônibus 0.05, caminhão 0.80 kg CO2 por km. 1 crédito = 1 tonelada. Créditos = arredondar para cima (emissão/1000). Custo = créditos × R$ 25,00.

## Ordem em que construí os arquivos
1. index.html - estrutura semântica
2. style.css - paleta em variáveis CSS e BEM
3. config.js - rotas, fatores e preço do crédito
4. calculator.js - função isolada de distância, emissão, créditos e custo
5. ui.js - mostrar resultado, comparação e créditos
6. app.js - ligar botões e autocompletar

## Prompt que funcionou bem
"Crie o index.html semântico da calculadora de CO2, com seções de busca, resultado, comparação e créditos, deixando resultado, comparação e créditos escondidas até calcular."

## Endereço da calculadora publicada
Depois de ativar o GitHub Pages, cole aqui: https://SEU-USUARIO.github.io/calculadora-co2-viagens/
