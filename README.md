## Exemplo do padrão Singleton usando react.

O padrão Singleton garante que uma classe possua uma única instância e permita um ponto de acesso global à mesma.

Este projeto foi adaptado de um desafio já realizado (https://github.com/israel-bruno/desafio01-ignite-trilha-react).

Foi escolhido o React para melhor visualização do funcionamento do Design Pattern.

### Como rodar

Para rodar o app basta clonar o repositório e rodar os seguintes comandos:

-> npm install
-> npm run dev

### Funcionamento

Na pasta shared possui a implementação da Classe principal TasksSingleton.

Nos components Header e TaskList são chamadas as instâncias dessa classe através do método getInstance().
