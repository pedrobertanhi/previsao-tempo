# Previsão do Tempo

Aplicação web que consulta as condições meteorológicas atuais de uma cidade. A interface exibe localização, país, temperatura, descrição do clima, umidade e o ícone correspondente fornecido pela OpenWeatherMap.

![Uploading image.png…]()


## Funcionalidades

- Pesquisa pelo nome da cidade.
- Temperatura atual em graus Celsius.
- País associado à localização encontrada.
- Descrição do clima em português.
- Umidade relativa do ar.
- Ícone atualizado de acordo com a condição meteorológica.
- Imagens de fundo com transição visual.
- Layout adaptado a diferentes tamanhos de tela.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Fetch API
- OpenWeatherMap Current Weather API
- Google Fonts

## Executar localmente

1. Clone o repositório:

```bash
git clone https://github.com/pedrobertanhi/previsao-tempo.git
cd previsao-tempo
```

2. Crie uma conta na [OpenWeatherMap](https://openweathermap.org/api) e gere uma chave de API.
3. No arquivo `js/script.js`, substitua o valor da constante `key` pela sua chave.
4. Inicie um servidor local:

```bash
python -m http.server 8000
```

5. Acesse **http://localhost:8000/** e pesquise uma cidade.

## Estrutura do projeto

| Caminho | Conteúdo |
| --- | --- |
| `index.html` | Campo de pesquisa e painel meteorológico |
| `styles/style.css` | Layout, cores e responsividade |
| `js/script.js` | Consulta da API e atualização dos dados |
| `js/images.js` | Controle das imagens de fundo |
| `images/` | Imagens usadas no plano de fundo |

## Dados apresentados

A aplicação solicita à OpenWeatherMap o clima atual da cidade informada e apresenta:

- nome da cidade e código do país;
- temperatura em Celsius;
- descrição da condição meteorológica;
- percentual de umidade;
- ícone correspondente ao clima.

## Observação

A aplicação depende de conexão com a internet e de uma chave válida da OpenWeatherMap. Em um projeto publicado, a chave não deve permanecer exposta no código do navegador; o ideal é encaminhar a consulta por um backend ou função serverless.

## Autor

Desenvolvido por [Pedro Bertanhi](https://github.com/pedrobertanhi).
