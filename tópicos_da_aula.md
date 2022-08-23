# ECMAScript
É um ambiente de programação com especificações para várias linguagens: JavaScript, UnitScript entre outras.

## Compiladores
O JS é uma linguagem que vem sendo atualizada ao longo dos anos pela ECMA, por isso roda mais rápido e tem um código mais avançado que muitos browsers não conseguem suportar, para isso é necessário o uso de compiladores.
Compiladores são ferramentas que fazem a conversão de códigos mais recentes em códigos que todos os navegadores conseguem suportar.
Exemplo: Babel.
Ele mudaria o código em JavaScript moderno:
```js
const teste = 0 ?? 10
```
Para JavaScript suportado por todos os navegadores:
```js
var _;
const teste = (_ = 0) != null ? _ : 10;
```

## Bundle
Além do suporte ao formato do código em si ser limitado à versões antigas, as versões anteriores do JS não efetuavam importações de outros arquivos.
Com isso houve a necessidade de uma ferramenta que unisse toda a aplicação em apenas um arquivo (geralmente chamado bundle.js) todos os arquivos eram escritos em um só. Não necessariamente compilados, ou seja, mudando o código, mas se aproxima mais de um copia e cola. Copia de todos os arquivos da aplicação e cola em apenas um.
Uma das ferramentas mais completas e famosas é o webpack, que efetua essa junção.
Apesar de hoje a maioria dos navegadores já suportarem as importações nativamente, essa ferramenta ainda é muito usada em vários projetos, por isso a importância de conhecer.
Diferente dos compiladores, que neste caso o problema existe por os navegadores não acompanharem o ritmo de atualizações do JavaScript, fazendo necessário o uso da compilação para o código ser entendido por todos os browsers.

### [esbuild]("https://esbuild.github.io/")
É um bundler, assim como o Webpack, mas faz a mesma função que o Babel. Esta ferramenta é atual e supre a necessidade de compilação e bundler.
[link para comparação entre esbuild × swc × typescript × babel]("https://datastation.multiprocess.io/blog/2021-11-13-benchmarking-esbuild-swc-typescript-babel.html#:~:text=large%2C70.57572-,Results,-Loading%20the%20above")

### [Vite]("https://vitejs.dev/")
É um ambiente de desenvolvimento para aplicações modernas em JavaScript.
- uso e poucos plugins, o que gera overhead pequeno, ou seja, performance grande;
- faz o bundler automático;
- caso necessário, se utiliza do Babel para compilar.