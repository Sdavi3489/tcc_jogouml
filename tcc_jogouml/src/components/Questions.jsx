import React from 'react'
import styles from '../styles/Questions.module.css'
import { useState, useEffect } from 'react'
import { FcOk, FcLike } from 'react-icons/fc';
import { FiArrowRightCircle } from "react-icons/fi";
import { IoCloseCircle, IoTimeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import comboImg from "../assets/conquistas/combo.png";
import Time from './Time';


const Questions = ({ userID }) => {
    const [showResp, setshowResp] = useState(false); // Mostra resultado na tela quando o resultado for true, quando o usuário escolher a resposta acionando a função verfica_resp
    const [count, setCount] = useState(1); //conta o id das perguntas conforme o usuário avança e serve para indentifica o id da tabela pergunta.
    const [bd_dados, setBdados] = useState([]) //guarda todas as informações da requisição get do banco de dados da tabela pergunta.
    const [ver, setVer] = useState([]) //guarda as informações que enviamos para o banco de dados da tabela resposta.
    const [count_vida, setCountVida] = useState(5) //Contador de vidas
    const [Score, setScore] = useState(0) // Pontuação do jogador 
    const [resp, setResp] = useState('') // Esta variável identifica qual opção foi escolhida pelo jogador e server para mostrar o resultado na tela.
    const [acertos, setAcertos] = useState(0) // armazena o numero de acertos
    const [erros, setErros] = useState(0) // armazena o numero de erros
    const [Jogseg, setJogSeg] = useState(0) // Esta variável indica as jogadas seguidas do jogador
    const [showCombo, setShowCombo] = useState(false); // Esta variável armazena a informação para fazer a pontuacao dobrada aparece
    const navigate = useNavigate() // navega para o link definido quando o for acionado
    const style_itens = { paddingRight: ".5rem"} // espaçamento
    const apiURL = import.meta.env.VITE_REACT_APP_API_URL; // url da api
    // TODO: Trocar todas requisições do servidor para a apiURL onde o servidor está hospedado


    function verifica_resp(e) {
        e.preventDefault();
        const resp_dada = { "id_resp": count, "resposta_dada": e.target.value, "usuario_fk": userID, "pergunta_fk": count } // manda as informações em json para a requisição post.
        const rev = bd_dados.map((res) => res.resposta_correta) //pega a resposta correta
        setshowResp(true); //Mostra a resposta correta e incorreta da questão
        setResp(resp_dada.resposta_dada);// manda a resposta escolhida pelo jogador

        // console.log(rev);

        if (resp_dada.resposta_dada == rev) {
            console.log('Ganhou 1 ponto!');
            setScore((scr) => scr + 50); // Acrescenta o numero de pontos
            setAcertos((act) => act + 1); //Acrescenta numero de acertos
            setJogSeg((seg) => seg + 1); //Acrescenta jogadas seguindas

            // usando switch para determinados casos
            // Caso 1 for certo e o contador for 1 ganha a conquista e se for o ultimo também
            switch (count) {
                case 1:
                    console.log('Conquista: Começando com o pé direito')
                    localStorage.setItem(`co01`, 'Conquista: Começando com o pé direito');
                    break;
                case 10:
                    localStorage.setItem(`co07`, 'Conquista: Finalizando com chave de ouro!');
                    console.log('Conquista: Finalizando com chave de ouro!')
                    break;
            }

            // jogseg são jogadas seguidas caso o jogador acertar 3 ou 5 vezes terá pontuacao dobrada
            switch (Jogseg) {
                case 3:
                    localStorage.setItem(`co03`, 'Conquista: Acerte três perguntas seguidas');
                    localStorage.setItem(`co06`, 'Conquista: Ganhando dobrado');
                    setScore((scr) => scr + 50); // Acrescenta o numero de pontos dobrados quando acerta 3 seguidas
                    console.log('Conquista: Acerte três perguntas seguidas')
                    break;
                case 5:
                    localStorage.setItem(`co04`, 'Conquista: Acerte cinco perguntas seguidas');
                    setScore((scr) => scr + 50); // Acrescenta o numero de pontos dobrados quando acerta 3 seguidas
                    console.log('Conquista: Acerte cinco perguntas seguidas')
                    break;
            }
        }
        else {
            console.log('Perdeu 1 ponto!');
            setScore((scr) => scr - 30); // Diminui o numero de pontos
            setErros((er) => er + 1); // Aumenta o numero de erros
            setCountVida((ch) => ch - 1); // Diminui uma vida do jogador
            setJogSeg(0);// jogada volta para 0 caso jogador erre uma pergunta
            setShowCombo(false);
        }

        //console.log(bd_dados.map((res) => res.ver_a))
        //console.log(bd_dados.map((res) => res.ver_a[0]))
        //console.log(rev[0])
        // TODO: Trocar todas requisições do servidor para a apiURL onde o servidor está hospedado
        fetch(`${apiURL}/answer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resp_dada),
        })
            .then(response => response.json())
            .then(data => {
                setVer(data);
                //console.log(data.resposta_dada); // Dados retornados pela API após a requisição POST
            })
            .catch(error => {
                console.log('Ocorreu um erro:', error);
            });

    }

    useEffect(() => {
        fetch(`${apiURL}/question/${count}`)
            .then(response => response.json())
            .then(data => {
                setBdados(data); // pega as questoes do banco de dados
            })
            .catch(error => {
                console.log('Ocorreu um erro:', error);
            });
    }, [count])

    function next_question() {
        //e.preventDefault()
        setCount((e) => e + 1)
        setshowResp(false)
        if (Jogseg == 3 || Jogseg == 5) {
            setShowCombo(true); // Mostra imagem do combo 2x pontuacao dobrada
        }
        else {
            setShowCombo(false); // Remove a imagem do combo 2x pontuacao dobrada
        }

        if (count_vida == 0) {
            return navigate('/private/gameover');
        }
        // utilizar o map para pegar o numero do index e somar index + 1 para dar o numero certo do total de questões  
        if (count == 10) {
            if (acertos == 10) {
                localStorage.setItem(`tr01`, 'Troféu: gabaritando caso de uso iniciante');
            }
            localStorage.removeItem('inGame');
            return navigate(`/private/result/${userID}/${Score}/${acertos}?erros=${erros}`);// esse navigate vai fazer um redirecionamento para a página de resultados

        }
    }

    return (
        <div className={styles.container_qt}>
            <div className={styles.contItemsGame}>
                <IoTimeOutline style={style_itens} size={30} color='#FFF'></IoTimeOutline>
                <div className={styles.time}><Time /></div>
                <p className={styles.score}>PONTOS: {Score}</p>
                <div className={styles.combo}>{showCombo == true && (<img src={comboImg} height={'50px'} />)}</div>
                <FcLike className={styles.fcLike} size={35} /><p className={styles.countHearts}>{count_vida}</p>
            </div>
            <div className={styles.imgPerg}>
                <p className={styles.pq}>{bd_dados.map((e, index) => e.pergunta)}</p>
            </div>
            <button className={styles.btnA} onClick={verifica_resp} value='A' disabled={showResp}>{bd_dados.map((r) => r.opcao_a)}{showResp && resp == 'A' && (bd_dados.map((res, index) => res.ver_a == true ? <FcOk size={25} /> : <IoCloseCircle color="#FF0000" size={25} />))}</button>
            <button className={styles.btnA} onClick={verifica_resp} value='B' disabled={showResp}>{bd_dados.map((r) => r.opcao_b)}{showResp && resp == 'B' && (bd_dados.map((res, index) => res.ver_b == true ? <FcOk size={25} /> : <IoCloseCircle color="#FF0000" size={25} />))}</button>
            <button className={styles.btnA} onClick={verifica_resp} value='C' disabled={showResp}>{bd_dados.map((r) => r.opcao_c)}{showResp && resp == 'C' && (bd_dados.map((res, index) => res.ver_c == true ? <FcOk size={25} /> : <IoCloseCircle color="#FF0000" size={25} />))}</button>
            <button className={styles.btnA} onClick={verifica_resp} value='D' disabled={showResp}>{bd_dados.map((r) => r.opcao_d)}{showResp && resp == 'D' && (bd_dados.map((res, index) => res.ver_d == true ? <FcOk size={25} /> : <IoCloseCircle color="#FF0000" size={25} />))}</button>
            <div className={styles.container_btn}>{showResp && (<button className={styles.btnArrow} onClick={next_question}><FiArrowRightCircle /></button>)}</div>
        </div>
    )
    // o map pega cada valor do array, o 'e' representa o valor, se eu quiser pegar o valor de a eu uso 'e.a' ou se quiser pegar de b 'e.b' e assim sucessivamente 
}

export default Questions