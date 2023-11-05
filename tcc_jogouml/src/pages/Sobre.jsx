import React from 'react'
import Title from '../components/Title'
import Text from '../components/Text'
import style from '../styles/Sobre.module.css'
import InfoCard from '../components/InfoCard'

const Sobre = () => {
    return (
        <>
            <div className={style.containerSobre}>
                <Title topico={"1"} title={"Sobre"} />
                <Text texto="
                    O jogo foi desenvolvido com intuito de auxiliar na obtenção de conhecimento por meio
                    da resolução de problemas relacionados à modelagem UML. Algumas perguntas foram
                    baseadas por meio de livros e também por conhecimento do desenvolvedor.
                "/>
                <Text texto="
                    A ideia para o desenvolvimento deste jogo surgiu através de uma proposta de trabalho
                    de conclusão de curso que visa resolver o problema do desinteresse ou dificuldade com
                    relação às temáticas tratadas durante um curso de Tecnologia da Informação, por esse
                    motivo o tema escolhido foi a modelagem UML que é a etapa onde serão definidos os requisitos 
                    funcionais do sistema e modelados de acordo com os diagramas necessários para que seja
                    possível compreender o funcionamento do sistema e identificar falhas. 
                "/>
                <Text texto="
                    Sobre o jogo, a seguir contém um guia sobre as principais funcionalidades do jogo:
                "/>
                <div className={style.containerCards}>
                    <InfoCard></InfoCard>
                </div>

                <Title topico="2" title="Referências" />                
                <p className={style.paragrafo}>A seguir contém as referências que serviram com base para a criação de algumas perguntas utilizadas no jogo:</p>
                <Text texto="GUEDES, Gilleanes T. A. UML 2: guia prático. 2. ed. São Paulo: Novatec, 2014. 192 p. : il."/>
                <Text texto="FOWLER, Martin. UML essencial. [90040-340 Porto Alegre RS]: Grupo A, 2011. E-book. ISBN 9788560031382. Disponível em: https://integrada.minhabiblioteca.com.br/#/books/9788560031382/. Acesso em: 05 nov. 2023."/>
            </div>
        </>
    )
}

export default Sobre