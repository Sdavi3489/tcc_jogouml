import React from 'react'

const Add_question = () => {
    const perguntas = [
        {
            "id_perg": 1,
            "pergunta": "O que o Diagrama de Caso de Uso representa?",
            "image": null,
            "opcao_a": "A estrutura física de um sistema",
            "opcao_b": "A interação entre objetos em um sistema",
            "opcao_c": "Os requisitos funcionais de um sistema",
            "opcao_d": "As classes e seus relacionamentos em um sistema",
            "ver_a": false,
            "ver_b": false,
            "ver_c": true,
            "ver_d": false,
            "resposta_correta": "C"
        },
        {
            "id_perg": 2,
            "pergunta": "Qual é o objetivo principal do Diagrama de Caso de Uso?",
            "image": null,
            "opcao_a": "Detalhar a implementação técnica do sistema",
            "opcao_b": "Identificar os atores envolvidos no sistema",
            "opcao_c": "Mostrar a estrutura estática do sistema",
            "opcao_d": "Representar as interações entre os casos de uso e os atores",
            "ver_a": false,
            "ver_b": false,
            "ver_c": false,
            "ver_d": true,
            "resposta_correta": "D"
        },
        {
            "id_perg": 3,
            "pergunta": "Quais elementos principais compõem o Diagrama de Caso de Uso?",
            "image": null,
            "opcao_a": "Atividades, transições e estados",
            "opcao_b": "Classes, atributos e métodos",
            "opcao_c": "Casos de uso, atores e relacionamentos",
            "opcao_d": "Componentes, interfaces e pacotes",
            "ver_a": false,
            "ver_b": false,
            "ver_c": true,
            "ver_d": false,
            "resposta_correta": "C"
        },
        {
            "id_perg": 4,
            "pergunta": "O que representa um ator no Diagrama de Caso de Uso?",
            "image": null,
            "opcao_a": "Uma funcionalidade do sistema",
            "opcao_b": "Uma classe do sistema",
            "opcao_c": "Um usuário ou sistema externo que interage com o sistema",
            "opcao_d": "Um componente do sistema",
            "ver_a": false,
            "ver_b": false,
            "ver_c": true,
            "ver_d": false,
            "resposta_correta": "C"
        },
        {
            "id_perg": 5,
            "pergunta": "Qual é a finalidade da relação de inclusão no Diagrama de Caso de Uso?",
            "image": null,
            "opcao_a": "Representar a herança entre casos de uso",
            "opcao_b": "Mostrar que um caso de uso utiliza outro caso de uso",
            "opcao_c": "Indicar a comunicação entre atores",
            "opcao_d": "Descrever a sequência de execução de atividades",
            "ver_a": false,
            "ver_b": true,
            "ver_c": false,
            "ver_d": false,
            "resposta_correta": "B"
        },
        {
            "id_perg": 6,
            "pergunta": "Como identificar os Casos de uso de um sistema?",
            "image": null,
            "opcao_a": "Identificar os Atores para depois identificar os Casos de uso deles.",
            "opcao_b": "Determinar requisitos não funcionais do sistema",
            "opcao_c": "Determinar funções e serviços que correspondem ao requisitos funcionais do sistema",
            "opcao_d": 'Determinar o caso de uso "A" inclui o caso de uso "B"',
            "ver_a": false,
            "ver_b": false,
            "ver_c": true,
            "ver_d": false,
            "resposta_correta": "C"
        },
        {
            "id_perg": 7,
            "pergunta": "O que é uma generalização de caso de uso?",
            "image": null,
            "opcao_a": "Um relacionamento que indica que um caso de uso é mais importante do que outros",
            "opcao_b": "Um relacionamento que indica que um caso de uso é uma variação de outro caso de uso",
            "opcao_c": "Uma relação que descreve a sequência de passos em um caso de uso",
            "opcao_d": "Um relacionamento que mostra a inclusão de funcionalidades extras em um caso de uso",
            "ver_a": false,
            "ver_b": true,
            "ver_c": false,
            "ver_d": false,
            "resposta_correta": "B"
        },
        {
            "id_perg": 8,
            "pergunta": "Qual é a opção correta em relação ao relacionamento de inclusão?",
            "image": null,
            "opcao_a": "Em um relacionamento de inclusão a execução do primeiro caso de uso obriga a execução do segundo caso de uso",
            "opcao_b": "Representa um relacionamento onde um caso é executado quando uma condição é satisfeita",
            "opcao_c": "Ocorre quando um ou mais casos de uso herdam todas as características",
            "opcao_d": "Nenhumas das alternativas anteriores",
            "ver_a": true,
            "ver_b": false,
            "ver_c": false,
            "ver_d": false,
            "resposta_correta": "A"
        },
        {
            "id_perg": 9,
            "pergunta": "Como identificar os Atores?",
            "image": null,
            "opcao_a": "Identificar os tipos de relacionamentos entre os atores que utilizam o sistema",
            "opcao_b": "Determinar primeiramente os casos de uso",
            "opcao_c": "Primeiramente é necessário identificar os requisitos funcionais do sistema",
            "opcao_d": "Identificar quais são os interessados que utilizarão o sistema, tanto usuários humanos, como usuários que representam o software e/ou hardware",
            "ver_a": false,
            "ver_b": false,
            "ver_c": false,
            "ver_d": true,
            "resposta_correta": "D"
        },
        {
            "id_perg": 10,
            "pergunta": "Qual é a opção correta em relação ao relacionamento de extensão?",
            "image": null,
            "opcao_a": "O relacionamento de extensão ocorre quando um caso de uso obriga a execução de outro caso de uso",
            "opcao_b": 'A seta apontando "<<extends>>" aponta para o caso de uso que estende',
            "opcao_c": "Representa o relacionamento entre o ator e o caso de uso",
            "opcao_d": "Representa a obrigatoriedade da execução de um caso de uso",
            "ver_a": false,
            "ver_b": true,
            "ver_c": false,
            "ver_d": false,
            "resposta_correta": "B"
        },
        {
            "id_perg": 11,
            "pergunta": "Qual lado o Ator que representa o sistema/hardware normalmente fica no diagrama de caso de uso?",
            "image": null,
            "opcao_a": "Ao lado do Ator Usuário",
            "opcao_b": "No lado esquerdo do container",
            "opcao_c": "Ambos os lados",
            "opcao_d": "No lado direito do container",
            "ver_a": false,
            "ver_b": false,
            "ver_c": false,
            "ver_d": true,
            "resposta_correta": "D"
        },
        {
            "id_perg": 12,
            "pergunta": "Informe qual destas opções é a relação de inclusão",
            "image": "../assets/questions/questao-12-14.jpg",
            "opcao_a": "1",
            "opcao_b": "2",
            "opcao_c": "3",
            "opcao_d": "4",
            "ver_a": false,
            "ver_b": false,
            "ver_c": true,
            "ver_d": false,
            "resposta_correta": "C"
        },
        {
            "id_perg": 13,
            "pergunta": "Informe qual destas opções é a relação de generalização",
            "image": "../assets/questions/questao-12-14.jpg",
            "opcao_a": "1",
            "opcao_b": "2",
            "opcao_c": "3",
            "opcao_d": "4",
            "ver_a": false,
            "ver_b": true,
            "ver_c": false,
            "ver_d": false,
            "resposta_correta": "B"
        },
        {
            "id_perg": 14,
            "pergunta": "Informe qual destas opções é a relação de extensão",
            "image": "../assets/questions/questao-12-14.jpg",
            "opcao_a": "1",
            "opcao_b": "2",
            "opcao_c": "3",
            "opcao_d": "4",
            "ver_a": false,
            "ver_b": false,
            "ver_c": false,
            "ver_d": true,
            "resposta_correta": "D"
        },
        {
            "id_perg": 15,
            "pergunta": "Indique qual é o tipo de relação que precisa ser utilizada neste caso",
            "image": "../assets/questions/questao-15.jpg",
            "opcao_a": "1",
            "opcao_b": "2",
            "opcao_c": "3",
            "opcao_d": "4",
            "ver_a": true,
            "ver_b": false,
            "ver_c": false,
            "ver_d": false,
            "resposta_correta": "A"
        },
        {
            "id_perg": 16,
            "pergunta": "Qual dessas opções representa o Ator no diagrama de caso de uso?",
            "image": "../assets/questions/questao-16.jpg",
            "opcao_a": "1",
            "opcao_b": "2",
            "opcao_c": "3",
            "opcao_d": "4",
            "ver_a": false,
            "ver_b": false,
            "ver_c": true,
            "ver_d": false,
            "resposta_correta": "C"
        },
        {
            "id_perg": 17,
            "pergunta": "Qual dessas opções representa o caso de uso?",
            "image": "../assets/questions/questao-17.jpg",
            "opcao_a": "1",
            "opcao_b": "2",
            "opcao_c": "3",
            "opcao_d": "4",
            "ver_a": false,
            "ver_b": false,
            "ver_c": false,
            "ver_d": true,
            "resposta_correta": "D"
        },
        {
            "id_perg": 18,
            "pergunta": "Informe qual seria um caso de uso relacionado ao bibliotecário no sistema de uma biblioteca",
            "image": "../assets/questions/questao-18.png",
            "opcao_a": "1",
            "opcao_b": "2",
            "opcao_c": "3",
            "opcao_d": "4",
            "ver_a": false,
            "ver_b": true,
            "ver_c": false,
            "ver_d": false,
            "resposta_correta": "B"
        },
        {
            "id_perg": 19,
            "pergunta": "O sistema de gerenciamento de uma escola contém diversas funcionalidades para os diversos atores, dessa forma, qual ator seria responsável por Registrar Presença?",
            "image": "../assets/questions/questao-19.png",
            "opcao_a": "1",
            "opcao_b": "2",
            "opcao_c": "3",
            "opcao_d": "4",
            "ver_a": false,
            "ver_b": false,
            "ver_c": true,
            "ver_d": false,
            "resposta_correta": "C"
        },
        {
            "id_perg": 20,
            "pergunta": "O sistema de reserva de consulta médica é responsável por registrar as consultas do pacientes, dessa forma, qual seria um caso de uso especificamente do ator Médico?",
            "image": "../assets/questions/questao-20.png",
            "opcao_a": "1",
            "opcao_b": "2",
            "opcao_c": "3",
            "opcao_d": "4",
            "ver_a": false,
            "ver_b": true,
            "ver_c": false,
            "ver_d": false,
            "resposta_correta": "B"
        },
        {
            "id_perg": 21,
            "pergunta": 'Os atores podem ser identificados com o nome "system" entre sinais de "<" e ">", que serve para diferenciá-los de atores humanos, nesse caso como é chamado esse tipo de identificação?',
            "image": "../assets/questions/questao-21.png",
            "opcao_a": "Extend",
            "opcao_b": "Include",
            "opcao_c": "Estereótipo",
            "opcao_d": "Access",
            "ver_a": false,
            "ver_b": false,
            "ver_c": true,
            "ver_d": false,
            "resposta_correta": "C"
        },        
        {
            "id_perg": 22,
            "pergunta": 'Um usuário do GitHub pode criar tanto um repositório público como um privado, dessa forma de acordo com a imagem a seguir, qual é o tipo de relacionamento correto para se utilizar nesse caso de uso?',
            "image": "../assets/questions/questao-22.png",
            "opcao_a": "1",
            "opcao_b": "2",
            "opcao_c": "3",
            "opcao_d": "4",
            "ver_a": false,
            "ver_b": true,
            "ver_c": false,
            "ver_d": false,
            "resposta_correta": "B"
        },
        {
            "id_perg":23,
            "pergunta":'O caso de uso da imagem abaixo apresenta o diagrama de caso de uso de uma pizzaria. Na imagem é possível visualizar os casos de uso "Validar pedido" e "Efetuar Pagamento". Nesse caso a execução do caso de uso "Efetuar Pagamento" obriga a execução do caso de uso "Validar Pedido". Por esse motivo, qual é o relacionamento correto para esta situação?',
            "image": "../assets/questions/questao-23.png",
            "opcao_a": "1",
            "opcao_b": "2",
            "opcao_c": "3",
            "opcao_d": "4",
            "ver_a": false,
            "ver_b": false,
            "ver_c": true,
            "ver_d": false,
            "resposta_correta": "C"
        },
        {
            "id_perg": 24,
            "pergunta": 'No caso de uso de uma loja virtual existe uma relação entre dois casos de uso, dessa forma qual seria o tipo de relacionamento correto nessa situação?',
            "image": "../assets/questions/questao-24.png",
            "opcao_a": "1",
            "opcao_b": "2",
            "opcao_c": "3",
            "opcao_d": "4",
            "ver_a": false,
            "ver_b": false,
            "ver_c": false,
            "ver_d": true,
            "resposta_correta": "D"
        },
        {
            "id_perg": 25,
            "pergunta": 'No caso de uso apresentado contém dois tipos de usuário no sistema de um site de eventos. Entretanto, os usuários compartilham do mesmo caso de uso, dessa forma qual desses relacionamentos podem servir para relacionar os dois atores ao Ator principal do sistema?',
            "image": "../assets/questions/questao-25.png",
            "opcao_a": "1",
            "opcao_b": "2",
            "opcao_c": "3",
            "opcao_d": "4",
            "ver_a": false,
            "ver_b": true,
            "ver_c": false,
            "ver_d": false,
            "resposta_correta": "B"
        },
        {
            "id_perg": 26,
            "pergunta": 'Em um caso de uso estendido onde a condição para a execução não fica claro, é necessário acrescentar uma restrição à associação de extensão por meio de uma nota.',
            "image": "../assets/questions/questao-26.png",
            "opcao_a": "1",
            "opcao_b": "2",
            "opcao_c": "3",
            "opcao_d": "4",
            "ver_a": false,
            "ver_b": false,
            "ver_c": true,
            "ver_d": false,
            "resposta_correta": "C"
        },
        {
            "id_perg": 27,
            "pergunta": 'Sobre a documentação de caso de uso qual destas alternativa é a correta?',
            "image": null,
            "opcao_a": "Existe um formato específico de documentação para casos de uso",
            "opcao_b": "Os casos de uso não podem ser documentados por meio de outros diagramas como o diagrama de sequência ou de atividades",
            "opcao_c": "O formato da documentação não é flexível e não permite que o caso de uso seja documentado da forma que se considera melhor",
            "opcao_d": "A documentação de um caso de uso descreve os atores que interagem com o caso de uso e quais as funções que eles desempenham.",
            "ver_a": false,
            "ver_b": false,
            "ver_c": false,
            "ver_d": true,
            "resposta_correta": "D"
        },
        {
            "id_perg": 28,
            "pergunta": 'Responda qual é a alternativa correta para cada relacionamento começando pelo primeiro caso de uso e depois pelo segundo respectivamente',
            "image": "../assets/questions/questao-28.png",
            "opcao_a": "<<Extend>> / <<Include>>",
            "opcao_b": "<<Include>> / <<Include>>",
            "opcao_c": "<<Include>> / <<Extend>>",
            "opcao_d": "<<Extend>> / <<Extend>>",
            "ver_a": true,
            "ver_b": false,
            "ver_c": false,
            "ver_d": false,
            "resposta_correta": "A"
        },
        

    ]


    /*
                {
            "id_perg": 8,
            "pergunta": "Qual é o propósito do diagrama de sequência no contexto do Diagrama de Caso de Uso?",
            "image": null,
            "opcao_a": "Representar as interações entre os atores e o sistema",
            "opcao_b": "Descrever o comportamento interno das classes do sistema",
            "opcao_c": "Mostrar a sequência de passos em um caso de uso",
            "opcao_d": "Exibir a estrutura estática do sistema",
            "ver_a": true,
            "ver_b": false,
            "ver_c": false,
            "ver_d": false,
            "resposta_correta": "A"

                    {
            "id_perg": 10,
            "pergunta": "O que é um diagrama de contexto no Diagrama de Caso de Uso?",
            "image": null,
            "opcao_a": "Um diagrama que mostra a estrutura física do sistema",
            "opcao_b": "Um diagrama que representa a interação entre casos de uso",
            "opcao_c": "Um diagrama que descreve as atividades executadas em um caso de uso",
            "opcao_d": "Um diagrama que mostra a visão geral do sistema, incluindo os atores e os principais casos de uso",
            "ver_a": false,
            "ver_b": false,
            "ver_c": false,
            "ver_d": true,
            "resposta_correta": "D"
        },
        },
    */

    // fazer um map que fara o cadastro de cada pergunta automaticamente
    function OnHandlesubmit() {
        const apiURL = import.meta.env.VITE_REACT_APP_API_URL; // url da api
        let index = 0;
        while (index <= 27) {
            fetch(`${apiURL}/perg`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(perguntas[index]), // perguntas[10] precisa mandar um por um manualmente para adicionar cada um por cada indice começando pelo 0 até a última pergunta cadastrada
            })
                .then(response => response.json())
                .then(data => {
                    console.log('sucesso');
                    console.log(data);
                    //console.log(perguntas[0]);
                    //console.log(data.resposta_dada); // Dados retornados pela API após a requisição POST
                    // lembrar de no futuro criar uma página apenas para adicionar novas questões
                })
                .catch(error => {
                    console.log('Ocorreu um erro:', error);
                });

            index++;
        }
    }

    return (
        <div>
            <button onClick={OnHandlesubmit}>Armazenar Perguntas</button>
        </div>
    )
}

export default Add_question