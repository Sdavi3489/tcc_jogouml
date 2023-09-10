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
            "pergunta": "O que é um caso de uso primário?",
            "image": null,
            "opcao_a": "Um caso de uso que não é usado por nenhum outro caso de uso",
            "opcao_b": "Um caso de uso de alta prioridade",
            "opcao_c": "Um caso de uso que representa uma funcionalidade essencial do sistema",
            "opcao_d": "Um caso de uso que não tem atores associados",
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
        },
        {
            "id_perg": 9,
            "pergunta": "O que é uma extensão de caso de uso?",
            "image": null,
            "opcao_a": "Um relacionamento que indica a herança entre casos de uso",
            "opcao_b": "Um relacionamento que mostra a comunicação entre atores",
            "opcao_c": "Um relacionamento que indica a utilização de um caso de uso por outro caso de uso",
            "opcao_d": "Um relacionamento que descreve uma condição opcional ou alternativa em um caso de uso",
            "ver_a": false,
            "ver_b": false,
            "ver_c": false,
            "ver_d": true,
            "resposta_correta": "D"
        },
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
        {
            "id_perg": 11,
            "pergunta": "Informe qual destas opções é a relação de inclusão",
            "image": "../assets/questions/questao-11-13.jpg",
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
            "id_perg": 12,
            "pergunta": "Informe qual destas opções é a relação de extensão",
            "image": "../assets/questions/questao-11-13.jpg",
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
            "id_perg": 13,
            "pergunta": "Informe qual destas opções é a relação de generalização",
            "image": "../assets/questions/questao-11-13.jpg",
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
            "pergunta": "Indique qual é o tipo de relação que precisa ser utilizada neste caso",
            "image": "../assets/questions/questao-14.jpg",
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
            "id_perg": 15,
            "pergunta": "Qual dessas opções representa o Ator no diagrama de caso de uso?",
            "image": "../assets/questions/questao-15.jpg",
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
            "id_perg": 16,
            "pergunta": "Qual dessas opções representa o caso de uso?",
            "image": "../assets/questions/questao-16.jpg",
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
    ]

    // fazer um map que fara o cadastro de cada pergunta automaticamente
    function OnHandlesubmit() {
        let index = 0;
        while (index <= 15) {
            fetch('http://localhost:3000/perg', {
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