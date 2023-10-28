import React from 'react'
import Title from './Title'
import imgMenu from '../assets/imgRules/new-menu-jogo.png'
import imgJogo from '../assets/imgRules/tela-jogo-rules.png'
import Figura from './Figura'
import style from '../styles/RulesGame.module.css'

const RulesGame = () => {
    return (
        <>
            <Title topico="1" title="Regras do Jogo Componente" />
            <p className={style.paragrafoTexto}>
                Os tópicos a seguir explicam a dinâmica do jogo.
                O jogo foi projetado com intuito de servir como uma forma de aprender de forma gamificada e simples.
                Dessa forma, com os conteúdos apresentados nos tópicos a seguir você conseguirá entender facilmente cada
                componente do jogo e suas funcionalidades.
            </p>

            <Title topico="1.1" title="Menu Inicial" />
            <p className={style.paragrafoTexto}>
                O menu do jogo contém as opções disponíveis para que o usuário escolha qual o nível de dificuldade de preferência.
                No momento a versão atual disponibiliza somente o diagrama de caso de uso contendo as opções de escolha de níveis entre <strong>Iniciante</strong> e <strong>Intermediário</strong>.
                Depois aperte em <strong>Começar</strong> para iniciar o jogo.
            </p>
            <Figura image={imgMenu} caption="Menu do jogo" lar="450" alt="350" />

            <Title topico="1.2" title="Tela do jogo" />
            <p className={style.paragrafoTexto}>
                A imagem apresentada a seguir contém os elementos de gamificação mais importantes do jogo. Os componentes do jogo
                são responsáveis pela interação com o jogador. Sobre a componentização do jogo podemos citar os seguintes elementos disponíveis:
            </p>
            <Figura image={imgJogo} caption="Jogo em andamento" />

            <ol>
                <li>Navbar</li>
                <p>Oferece uma barra de navegação onde o usuário pode voltar ao menu, consulta as instruções, consultar ranking e sair do jogo</p>
                <li>Time</li>
                <p>
                    Esse é o cronometro do jogo, ele que vai determinar o tempo que o jogador possui para finalizar
                    e caso o jogador não terminar a tempo será Game Over.
                </p>
                <li>Pontuação</li>
                <p>
                    A pontuação do jogo em todos os níveis contabilizam 50 pontos para cada questão correta e menos 30 pontos para as incorretas. 
                    Lembrando também do critério de desempate em que a pontuação final é contabilizada através da soma da pontuação parcial adquirida no jogo mais o tempo, levando em consideração que o bônus do tempo poderá ser subtraído em dez pontos por cada erro.
                </p>
                <li>Vidas do jogador</li>
                <p>
                    O jogador possui 5 vidas e deve mantê-las respondendo as perguntas corretamente e caso
                    responder diversas perguntas incorretas o jogador irá ter o número de vidas subtraídas até
                    eventualmente um Game Over ocorrer ou ficar com uma pontuação menor.
                </p>
                <li>Ilustração da pergunta</li>
                <p>
                    A ilustração das perguntas ajudarão o jogador a entender a situação apresentada
                    e através da interpretação da imagem com a pergunta feita deverá solucionar a situação
                    através de uma das respostas.
                </p>
                <li>Barra de respostas</li>
                <p>
                    A barra de resposta contém todas as respostas disponíveis para que o jogador solucione
                    o problema apresentado.
                </p>
            </ol>
        </>
    )
}

export default RulesGame