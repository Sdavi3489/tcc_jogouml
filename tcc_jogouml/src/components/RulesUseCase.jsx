import React from 'react'
import Title from './Title'
import Figura from './Figura'
import style from '../styles/RulesUseCase.module.css'

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
                um <strong>Ator</strong> pode ser um sistema ou Hardware que interage com os com o sistema.
                Os atores são representados através de um boneco <strong>palito</strong> com uma descrição que
                serve indentificá-lo.
            </p>

        </>
    )
}

export default RulesUseCase