import React from 'react'
import Title from './Title'
import imgMenu from '../assets/imgRules/new-menu-jogo.png'
import imgJogo from '../assets/imgRules/tela-jogo-rules.png'
import imgPergCorrect from '../assets/imgRules/barra-respostas.png'
import imgPergIncorrect from '../assets/imgRules/barra-respostas-false.png'
import comboIMG from '../assets/imgRules/tela-combo.png'
import ResultadoTela from '../assets/imgRules/resultados-tela.png'
import telaGameOver from '../assets/imgRules/tela-game-over.png'
import telaRanking from '../assets/imgRules/ranking-rules.png'
import Figura from './Figura'
import style from '../styles/RulesGame.module.css'

const RulesGame = () => {
    return (
        <>

            <div className={style.containerTopicos}>
                <ul className={style.ulTopico}>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Regras do Jogo Componente">Regras do Jogo Componente</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Menu Inicial">Menu Inicial</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Tela do jogo">Tela do jogo</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Verificação da resposta">Verificação da resposta</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Conquista de pontuação dobrada">Conquista de pontuação dobrada</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Tela de resultados">Tela de resultados</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Tela de Game Over">Tela de Game Over</a></li>
                    <li className={style.liTopico}><a className={style.topicoList} href="#Ranking">Ranking</a></li>
                </ul>
            </div>
            
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

            <ol className={style.listComponents}>
                <li className={style.listTelajogo}>Navbar</li>
                <p>Oferece uma barra de navegação onde o usuário pode voltar ao menu, consulta as instruções, consultar ranking e sair do jogo</p>
                <li className={style.listTelajogo}>Time</li>
                <p>
                    Esse é o cronometro do jogo, ele que vai determinar o tempo que o jogador possui para finalizar
                    e caso o jogador não terminar a tempo será Game Over.
                </p>
                <li className={style.listTelajogo}>Pontuação</li>
                <p>
                    A pontuação do jogo em todos os níveis contabilizam 50 pontos para cada questão correta e menos 30 pontos para as incorretas.
                    Lembrando também do critério de desempate em que a pontuação final é contabilizada através da soma da pontuação parcial adquirida no jogo mais o tempo, levando em consideração que o bônus do tempo poderá ser subtraído em dez pontos por cada erro.
                </p>
                <li className={style.listTelajogo}>Vidas do jogador</li>
                <p>
                    O jogador possui 5 vidas e deve mantê-las respondendo as perguntas corretamente e caso
                    responder diversas perguntas incorretas o jogador irá ter o número de vidas subtraídas até
                    eventualmente um Game Over ocorrer ou ficar com uma pontuação menor.
                </p>
                <li className={style.listTelajogo}>Ilustração da pergunta</li>
                <p>
                    A ilustração das perguntas ajudarão o jogador a entender a situação apresentada
                    e através da interpretação da imagem com a pergunta feita deverá solucionar a situação
                    através de uma das respostas.
                </p>
                <li className={style.listTelajogo}>Barra de respostas</li>
                <p>
                    A barra de resposta contém todas as respostas disponíveis para que o jogador solucione
                    o problema apresentado.
                </p>
            </ol>
            <Title topico="1.3" title="Verificação da resposta" />
            <p className={style.paragrafoTexto}>
                A resposta é verificada após o usuário escolher uma resposta disponível. Dessa forma, quando a resposta
                for correta, o jogo deve adicionar o ícone verde demostrando que está certo e se for incorreto mostrar
                o ícone vermelho indicando que a resposta informada está incorreta. Após o jogador ter respondido aparecerá um botão para
                prosseguir para a próxima questão.
            </p>
            <Figura image={imgPergCorrect} caption="Indicativo de Resposta Correta" />
            <Figura image={imgPergIncorrect} caption="Indicativo de Resposta Incorreta" />

            <Title topico="1.4" title="Conquista de pontuação dobrada" />
            <p className={style.paragrafoTexto}>
                O usuário ganha essa recompensa quando consegue
                o benefício de pontos dobrados após um sequência
                de três ou cinco acertos e na questão seguinte se for certa
                a pontuação será contabilizado o dobro da pontuação. O ícone da pontuação dobrada aparece
                ao lado do ícone de vida do jogador para sinalizar que a pontuação dobrada está ativada.
            </p>
            <Figura image={comboIMG} caption="Imagem demonstrando que a pontuação dobrada está ativa" />

            <Title topico="1.5" title="Tela de resultados" />
            <p className={style.paragrafoTexto}>
                A tela de resultados é apresentada quando o jogador consegue chegar até o final
                do jogo obtendo seu desempenho final. A tela do resultado final, além da pontuação contém também
                as conquistas obtidas, o número de acertos e o tempo de duração do jogo.
            </p>
            <Figura image={ResultadoTela} caption="Tela de Resultados" />


            <Title topico="1.6" title="Tela de Game Over" />
            <p className={style.paragrafoTexto}>
                A tela de Game Over aparece quando o jogador perde todas as vidas ou quando o tempo acabar.
            </p>
            <Figura image={telaGameOver} caption="Tela de Game Over" />

            <Title topico="1.7" title="Ranking" />
            <p className={style.paragrafoTexto}>
                O ranking do jogo contém a pontuação final dos jogadores. A pontuação final no ranking é contabilizada de
                forma diferente, nesse caso, o ranking funciona de acordo com a soma das pontuações de cada rodada jogada, ou seja,
                não importa o nível de dificuldade, toda vez que o jogador terminar uma rodada, a pontuação final será somada com
                a pontuação anterior.
            </p>
            <Figura image={telaRanking} caption="Ranking do jogo" />


        </>
    )
}

export default RulesGame