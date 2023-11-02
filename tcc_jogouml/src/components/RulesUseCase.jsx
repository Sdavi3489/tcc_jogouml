import React from 'react'
import Title from './Title'
import Figura from './Figura'
import style from '../styles/RulesUseCase.module.css'
import imgActor from '../assets/imgRules/ator-rules.png'
import imgCasodeUso from '../assets/imgRules/caso-de-uso-rules.png'
import imgAssociacao from '../assets/imgRules/relacionamento-rules.png'
import imgGeneralizacao from '../assets/imgRules/generalizacao-rules.png'
import imgHerancaAtor from '../assets/imgRules/especializacao-atores.png'

const RulesUseCase = () => {
    return (
        <>

            <Title topico="2.1" title="O que é Caso de Uso?" />
            <p className={style.paragrafoTexto}>
                O diagrama de caso de uso busca através de uma linguagem simples demonstrar as funcionalidades
                de um sistema pela visão do usuário. O caso de uso é visualmente retratado através de elementos como atores, casos de uso e relacionamentos "include" e "extend".
                Conforme GUEDES (2009), o diagrama de caso de uso geralmente é utilizado nas fases de
                levantamento de requisitos do sistema e apresenta uma linguagem simples possibilitando
                a compreensão dos usuários em relação aos processos do sistema, além disso pode servir como base
                para a criação de outros diagramas.
            </p>

            <Title topico="2.2" title="Atores" />
            <p className={style.paragrafoTexto}>
                Os atores geralmente são representados pelos usuários que utilizam o sistema, porém,
                um <strong>Ator</strong> pode ser um sistema ou hardware que interage com o sistema.
                Os atores são representados através de um <strong>boneco palito</strong> com uma descrição que
                serve indentificá-lo.
            </p>
            <Figura image={imgActor} caption="Figura de como representar um ator em um diagrama de caso de uso" lar="150" alt="150" />

            <Title topico="2.3" title="Caso de Uso" />
            <p className={style.paragrafoTexto}>
                O caso de uso é representado por meio de uma <strong>elipse</strong> que representam as funcionalidades, serviços e tarefas 
                do usuário no sistema. A figura a seguir demostra como podemos representar as ações do usuário em um diagrama
                de caso de uso.
            </p>
            <Figura image={imgCasodeUso} caption="Exemplo de caso de uso" lar="200" alt="180" />

            <Title topico="2.4" title="Associações" />
            <p className={style.paragrafoTexto}>
                As associações podem representar a associação entre atores ou entre casos de uso através de um relacionamento de generalização,
                entre ator e caso de uso, ou entre dois casos de uso através do relacionamento de inclusão {'<<include>>'} ou de extensão {'<<extends>>'}   
            </p>
            <Figura image={imgAssociacao} caption="Exemplo de relacionamento entre ator e caso de uso" lar="450" alt="350" />

            <Title topico="2.3" title="Especialização/Generalização" />
            <p className={style.paragrafoTexto}>
                Este relacionamento ocorre quando um ou mais casos de uso herdam características de outro Caso
                de Uso, como associações e documentação. Pense em um diagrama de caso de uso como uma maneira de mostrar as funcionalidades 
                ou ações que um sistema pode realizar. O relacionamento de especialização/generalização é usado para organizar essas funcionalidades de uma maneira hierárquica, 
                tornando o diagrama mais claro e organizado.
            </p>
            <Figura image={imgGeneralizacao} caption="Especialização/Generalização" lar="380" alt="300" />
            <p className={style.paragrafoTexto}>
                Aqui, o <strong>Gerenciar Tarefas</strong> é o caso de uso genérico que generaliza a funcionalidade comum 
                compartilhada pelos casos de uso mais específicos. Isso significa que os casos de uso <strong>Adicionar Tarefa</strong>, <strong>Editar Tarefa</strong> e <strong>Excluir Tarefa</strong> herdam a funcionalidade principal de 
                gerenciamento de tarefas do caso de uso genérico.
            </p>
            <p className={style.paragrafoTexto}>
                Esse relacionamento também pode ser aplicado sobre atores como demonstra o exemplo da figura a seguir.
            </p>
            <Figura image={imgHerancaAtor} caption="Especialização/Generalização com Atores" lar="300" alt="300" />
            <p className={style.paragrafoTexto}>
                Em resumo, o relacionamento de especialização/generalização em um diagrama de caso de uso é uma maneira de organizar as funcionalidades do sistema hierarquicamente, simplificando a representação e mostrando como as partes do sistema estão relacionadas. 
                É como criar categorias principais e subcategorias para tornar a informação mais organizada e fácil de entender.
            </p>


        </>
    )
}

export default RulesUseCase