# 1) Observe o trecho de código:

int INDICE = 12, SOMA = 0, K = 1;

enquanto K < INDICE faça

{ K = K + 1; SOMA = SOMA + K;}

imprimir(SOMA);


**Ao final do processamento, qual será o valor da variável SOMA?**

**Resposta: 77**

# 2) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____

**Resposta:**

**a) 1, 3, 5, 7, 9**

**b) 2, 4, 8, 16, 32, 64, 128**

**c) 0, 1, 4, 9, 16, 25, 36, 49**

**d) 4, 16, 36, 64, 100**

**e) 1, 1, 2, 3, 5, 8, 13**

**f) 2,10, 12, 16, 17, 18, 19, 20**

# 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:

- O menor valor de faturamento ocorrido em um dia do ano;
- O maior valor de faturamento ocorrido em um dia do ano;
- Número de dias no ano em que o valor de faturamento diário foi superior à média anual.

a) Considerar o vetor já carregado com as informações de valor de faturamento.

b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.

c) Utilize o algoritmo mais veloz que puder definir.

**Resposta:**
**[questao-3.ts](./questao-3.ts)**

# 4) Banco de dados

Uma empresa solicitou a você um aplicativo para manutenção de um cadastro de clientes. Após a reunião de definição dos requisitos, as conclusões foram as seguintes:

- Um cliente pode ter um número ilimitado de telefones;
- Cada telefone de cliente tem um tipo, por exemplo: comercial, residencial, celular, etc. O sistema deve permitir cadastrar novos tipos de telefone;
- A princípio, é necessário saber apenas em qual estado brasileiro cada cliente se encontra. O sistema deve permitir cadastrar novos estados;

Você ficou responsável pela parte da estrutura de banco de dados que será usada pelo aplicativo. Assim sendo:

- Proponha um modelo lógico para o banco de dados que vai atender a aplicação. Desenhe as tabelas necessárias, os campos de cada uma e marque com setas os relacionamentos existentes entre as tabelas;
- Aponte os campos que são chave primária (PK) e chave estrangeira (FK);
- Faça uma busca utilizando comando SQL que traga o código, a razão social e o(s) telefone(s) de todos os clientes do estado de São Paulo (código “SP”);

**Resposta:**
**Modelo ER: [questao-4-er.png](./questao-4-er.png)**
**SQL Query: [questao-4.sql](./questao-4.sql)**

# 5) Dois veículos, um carro e um caminhão, saem respectivamente de cidades opostas pela mesma rodovia. O carro, de Ribeirão Preto em direção a Barretos, a uma velocidade constante de 90 km/h, e o caminhão, de Barretos em direção a Ribeirão Preto, a uma velocidade constante de 80 km/h. Quando eles se cruzarem no percurso, qual estará mais próximo da cidade de Ribeirão Preto?

a) Considerar a distância de 125km entre a cidade de Ribeirão Preto <-> Barretos.
b) Considerar 3 pedágios como obstáculo e que o carro leva 5 minutos a mais para passar em cada um deles, pois ele não possui dispositivo de cobrança de pedágio.
c)Explique como chegou no resultado.

### 1. Sem considerar pedágios

#### Determinando o tempo de encontro:

- Velocidade do carro: 90 km/h
- Velocidade do caminhão: 80 km/h
- Distância total: 125 km

Vamos chamar o tempo de encontro de "h" horas.

O carro percorre 90h km e o caminhão percorre 80h km. No momento do encontro, a soma dessas distâncias é igual à distância total:

90h + 80h = 125

170h = 125

h = 125/170 ± 0.735 horas ± 44.2 minutos

#### Calculando as distâncias percorridas:

- Distância percorrida pelo carro: 90 * 0.735 ± 66.15km
- Distância percorrida pelo caminhão: 80 * 0.735 ± 58.8km

### 2. Considerando os pedágios

O carro enfrenta 3 pedágios, cada um adicionando um atraso de 5 minutos. O atraso total é:

3 * 5 = 15minutos = 0.25horas

O tempo total do carro, considerando os pedágios, é:

0.735 + 0.25 = 0.985horas ± 59.1minutos

#### Calculando a nova distância percorrida pelo carro:

O carro, após o tempo total ajustado de 0.985 horas, percorre:

90 * 0.985 ± 88.65km

#### Distância restante para Ribeirão Preto e Barretos:

- **Distância do carro para Ribeirão Preto**: 125 - 88.65 ± 36.35km
- **Distância do caminhão para Ribeirão Preto**: 80 * 0.735 ± 58.8km

### Conclusão

Quando os veículos se encontram:

- O **carro** está a aproximadamente 36.35 km de Ribeirão Preto.
- O **caminhão** está a aproximadamente 58.8 km de Ribeirão Preto.

Portanto, **o caminhão está mais perto de Ribeirão Preto quando eles se cruzam**.