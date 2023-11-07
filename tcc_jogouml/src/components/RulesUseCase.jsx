import React from 'react'
import Title from './Title'
import Figura from './Figura'
import style from '../styles/RulesUseCase.module.css'
import imgActor from '../assets/imgRules/ator-rules.png'
import imgCasodeUso from '../assets/imgRules/caso-de-uso-rules.png'
import imgAssociacao from '../assets/imgRules/relacionamento-rules.png'
import imgGeneralizacao from '../assets/imgRules/generalizacao-rules.png'
import imgHerancaAtor from '../assets/imgRules/especializacao-atores.png'
import imgInclude from '../assets/imgRules/include-rules.png'
import imgRestricao from '../assets/imgRules/restricao-extend.png'

const RulesUseCase = () => {
    return (
        <>
            <div className={style.containerTopicos}>
                <ul className={style.ulTopico}>
                    <li className={style.liTopico}><a className={style.topicoList} href="#O que é Caso de Uso?">O que é Caso de Uso?</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Atores">Atores</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Caso de Uso">Caso de Uso</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Associações">Associações</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Especialização/Generalização">Especialização/Generalização</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Include">Include</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Extend">Extend</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Restrição em associações de extensão">Restrição em associações de extensão</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Documentação de Caso de Uso">Documentação de Caso de Uso</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Referências">Referências</a></li>
                </ul>
            </div>
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
                entre ator e caso de uso, ou entre dois casos de uso através do relacionamento de inclusão <strong>"{'<<include>>'}"</strong> ou de extensão <strong>"{'<<extends>>'}"</strong> (GUEDES, 2014).
            </p>
            <Figura image={imgAssociacao} caption="Exemplo de relacionamento entre ator e caso de uso" lar="450" alt="350" />

            <Title topico="2.5" title="Especialização/Generalização" />
            <p className={style.paragrafoTexto}>
                Este relacionamento ocorre quando um ou mais casos de uso herdam características de outro Caso
                de Uso, como associações e documentação. Pense em um diagrama de caso de uso como uma maneira de mostrar as funcionalidades
                ou ações que um sistema pode realizar. O relacionamento de especialização/generalização é usado para organizar essas funcionalidades de uma maneira hierárquica,
                tornando o diagrama mais claro e organizado.
            </p>
            <Figura image={imgGeneralizacao} caption="Especialização/Generalização" lar="380" alt="300" />
            <p className={style.paragrafoTexto}>
                Na imagem acima, o <strong>Gerenciar Tarefas</strong> é o caso de uso genérico que generaliza a funcionalidade comum
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

            <Title topico="2.6" title="Include" />
            <p className={style.paragrafoTexto}>
                A associação de inclusão é utilizada quando um caso de uso obriga a execução de outro caso de uso.
                A associações de inclusão apresentam uma de linha tracejada, um estereótipo contendo o texto <strong>{"<<include>>"}</strong> e
                uma seta que aponta para o caso de uso que foi incluído (GUEDES, 2014).
            </p>
            <Figura image={imgInclude} caption="Associação de inclusão em um sistema de pedidos online" lar="400" alt="250"/>

            <ul className={style.listComponents}>
                <li className={style.listTelajogo}><strong>Fazer Pedido</strong> é o caso de uso base.</li>
                <li className={style.listTelajogo}><strong>Calcular Total</strong> é um caso de uso incluído, que é executado toda vez que um pedido é feito. Ele calcula o custo total dos itens no pedido.</li>
                <li className={style.listTelajogo}><strong>Enviar Confirmação</strong> é outro caso de uso incluído, que também é executado sempre que um pedido é feito. Ele envia um e-mail de confirmação ao cliente.</li>
            </ul>

            <p className={style.paragrafoTexto}>
                Nesse exemplo, o <strong>Fazer Pedido</strong> inclui os casos de uso <strong>Calcular Total</strong> e <strong>Enviar Confirmação</strong>. Ou seja, sempre que alguém faz um pedido, esses casos de uso incluídos são executados automaticamente para garantir que o pedido seja processado corretamente.
            </p>

            <Title topico="2.7" title="Extend" />
            <p className={style.paragrafoTexto}>
                A associação de extensão indica um caso de uso opcional que só é executado se uma determinada
                condição for satisfeita. A associação de extensão é representada por uma linha tracejada com
                o estereótipo contendo o texto <strong>{'<<extend>>'}</strong> e uma seta que aponta para o caso de uso que estende (GUEDES, 2014). 
            </p>
            <Figura image={imgInclude} caption="Associação de exclusão entre os casos de uso 'Cancelar Pedido' e 'Verificar Disponibilidade'" lar="400" alt="250" />

            <ul className={style.listComponents}>
                <li className={style.listTelajogo}><strong>Cancelar Pedido</strong> é o caso de uso estendido. Ele permite que um cliente cancele um pedido.</li>
                <li className={style.listTelajogo}><strong>Verificar Disponibilidade</strong> é um caso de uso de extensão. Ele só é executado se o cliente decidir cancelar um pedido e verificar se os produtos estão disponíveis para cancelamento.</li>
            </ul>

            <p className={style.paragrafoTexto}>
                Nesse caso, o <strong>Cancelar Pedido</strong> pode ser estendido pelo <strong>Verificar Disponibilidade</strong> em condições específicas. 
                Se o cliente optar por cancelar um pedido, o sistema verifica a disponibilidade dos produtos antes de confirmar o cancelamento.
            </p>
            <p className={style.paragrafoTexto}>
                Em resumo, a associação <strong>extend</strong> é usada quando um caso de uso estendido pode ser estendido por um caso de uso de extensão em determinadas condições. 
                Ambos os conceitos são úteis para descrever como os casos de uso se relacionam e interagem no sistema.
            </p>

            <Title topico="2.8" title="Restrição em associações de extensão" />
            <p className={style.paragrafoTexto}>
                A restrição em associações estendidas são criadas por meio de um texto entre chaves contendo
                as validações e condições que deve ser aplicado em determinada situação (GUEDES, 2014). A restrição
                serve com uma nota explicativa para o relacionamento entre os casos de uso estendidos.
            </p>
            <Figura image={imgRestricao} caption="Associação de Extensão com Restrição" lar="400" alt="400" />
            <p className={style.paragrafoTexto}>
               A nota explicativa serve para fornecer comentários ou restrições sobre um componente ou relacionamento estendido.
               A seta tracejada que liga o relacionamento de extensão com a nota se chama âncora (GUEDES, 2014). 
            </p>

            <Title topico="2.9" title="Documentação de Caso de Uso" />
            <p className={style.paragrafoTexto}>
                A documentação de uma caso de uso descreve todos requisitos funcionais do diagrama de caso de uso
                por meio de um linguagem simples, destacando todas as interações entre os atores e seus casos de
                uso. Em resumo, a documentação de casos de uso desempenha um papel crucial no desenvolvimento de software, 
                contribuindo para a comunicação eficaz, a compreensão do sistema e a garantia de que o sistema atenda aos requisitos do usuário 
                e do negócio. Ela é uma ferramenta valiosa para o sucesso de projetos de software, 
                desde a concepção até a manutenção e a evolução do sistema. 
            </p>
            <p className={style.paragrafoTexto}>
                A documentação de casos de uso não possuem formato ou regras específicas para a documentação, por esse motivo
                é permitido que se documente o caso de uso da maneira que quiser (GUEDES, 2014). A documentação pode ser feita
                por meio tabela contendo contendo informações como: Nome do caso de uso, atores, descrição, pré-condições, pós-condições,
                fluxo principal e fluxo de exceção.
            </p>

            <Title topico="3" title="Referências" />
            <p className={style.paragrafoTexto}>
                GUEDES, Gilleanes T. A. <strong>UML 2</strong>: guia prático. 2. ed. São Paulo: Novatec, 2014. 192 p. : il.
            </p>
        </>
    )
}

export default RulesUseCase