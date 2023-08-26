import React from 'react'
import styles from '../styles/Questions.module.css'
import { useState, useEffect } from 'react'
import { FcOk, FcLike } from 'react-icons/fc';
import { FiArrowRightCircle } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Questions = ({ userID }) => {
    //const [valTrue, setValTrue] = useState(false); // Verifica se o valor é verdadeiro ou falso
    const [showResp, setshowResp] = useState(false); // Mostra resultado na tela quando o resultado for true, quando o usuário escolher a resposta acionando a função verfica_resp
    const [count, setCount] = useState(1); //conta o id das perguntas conforme o usuário avança e serve para indentifica o id da tabela pergunta.
    const [bd_dados, setBdados] = useState([]) //guarda todas as informações da requisição get do banco de dados da tabela pergunta.
    const [ver, setVer] = useState([]) //guarda as informações que enviamos para o banco de dados da tabela resposta.
    const [count_vida, setCountVida] = useState(5) //Contador de vidas
    const [Score, setScore] = useState(0) // Pontuação do jogador 
    const [resp, setResp] = useState('') // Esta variável identifica qual opção foi escolhida pelo jogador e server para mostrar o resultado na tela.
    const [acertos, setAcertos] = useState(0)
    const [Jogseg, setJogSeg] = useState(0) // Esta variável indica as jogadas seguidas do jogador
    //const [conq, setConq] = useState([])
    const navigate = useNavigate() // navega para o link definido quando o for acionado


    function verifica_resp(e) {
        e.preventDefault();
        const resp_dada = { "id_resp": count, "resposta_dada": e.target.value, "usuario_fk": userID, "pergunta_fk": count } // manda as informações em json para a requisição post.
        const rev = bd_dados.map((res) => res.resposta_correta) //pega a resposta correta
        //document.getElementById(e).disabled = false;
        setshowResp(true); //Mostra a resposta correta e incorreta da questão
        setResp(resp_dada.resposta_dada);// manda a resposta escolhida pelo jogador

        console.log(rev);
        if (resp_dada.resposta_dada == rev) {
            console.log('Ganhou 1 ponto!');
            setScore((scr) => scr + 50); // Acrescenta o numero de pontos
            setAcertos((act) => act + 1); //Acrescenta numero de acertos
            setJogSeg((seg) => seg + 1); //Acrescenta jogadas seguindas

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

            switch (Jogseg) {
                case 3:
                    localStorage.setItem(`co03`, 'Conquista: Acerte três perguntas seguidas');
                    console.log('Conquista: Acerte três perguntas seguidas')
                    break;                
                case 5:
                    localStorage.setItem(`co04`, 'Conquista: Acerte cinco perguntas seguidas');
                    console.log('Conquista: Acerte cinco perguntas seguidas')
                    break;
            }

            // if (count == 1) {
            //     let infoRel = {
            //         acerto1: true,
            //     }
            //     fetch('http://localhost:3000/conq', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({"id_usuario": userID, "id_conquista": 1}),
            //     })
            //         .then(response => response.json())
            // }
            // if (count == 10) {
            //     fetch('http://localhost:3000/conq', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({"id_usuario": userID, "id_conquista": 4}),
            //     })
            //         .then(response => response.json())
            // }
        }
        else {
            console.log('Perdeu 1 ponto!');
            setScore((scr) => scr - 30); // Diminui o numero de pontos
            setCountVida((ch) => ch - 1); // Diminui uma vida do jogador
            setJogSeg(0);// jogada volta para 0 caso jogador erre uma pergunta
        }

        //console.log(bd_dados.map((res) => res.ver_a))
        //console.log(bd_dados.map((res) => res.ver_a[0]))
        //console.log(rev[0])

        fetch('http://localhost:3000/answer', {
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

        // o set Timeot define o tempo necessário de 2 segundos para que o usuário confira o resultado antes de pular para a próxima questão
        // setTimeout(() => {
        //     next_question();
        // }, 2000);

    }

    useEffect(() => {
        fetch(`http://localhost:3000/question/${count}`)
            .then(response => response.json())
            .then(data => {
                setBdados(data);
            })
            .catch(error => {
                console.log('Ocorreu um erro:', error);
            });
    }, [count])

    function next_question() {
        //e.preventDefault()
        setCount((e) => e + 1)
        setshowResp(false)

        if (count_vida == 0) {
            return navigate('/private/gameover');
        }
        // utilizar o map para pegar o numero do index e somar index + 1 para dar o numero certo do total de questões  
        if (count == 10) {
            // const result = ver.map((res) => res.resposta_dada) //pega a resposta dada
            // <Resultado resp=ver.resp_dada/>
            // esse if == 10 vai ser provisório por enquanto não adicionamos mais perguntas, quando adicionar mais eu coloco o tamanho (lenght) do array
            if(Score == 500){
                localStorage.setItem(`tr01`, 'Troféu: gabaritando caso de uso');
            }
            localStorage.removeItem('inGame');
            return navigate(`/private/result/${userID}/${Score}/${acertos}`);// esse navigate vai fazer um redirecionamento para a página de resultados

        }
    }

    return (
        <div className={styles.container_qt}>
            <div className={styles.container_vida}><p className={styles.score}>PONTOS: {Score}</p><p className={styles.countHearts}>{count_vida}</p><FcLike className={styles.fcLike} size={35} /></div>
            <p className={styles.pq}>{bd_dados.map((e, index) => e.pergunta)}</p>
            <button className={styles.btnA} onClick={verifica_resp} value='A'>{bd_dados.map((r) => r.opcao_a)}</button>{showResp && resp == 'A' && (bd_dados.map((res, index) => res.ver_a == true ? <FcOk size={25} /> : <IoCloseCircle color="#FF0000" size={25} />))}
            <button className={styles.btnA} onClick={verifica_resp} value='B'>{bd_dados.map((r) => r.opcao_b)}</button>{showResp && resp == 'B' && (bd_dados.map((res, index) => res.ver_b == true ? <FcOk size={25} /> : <IoCloseCircle color="#FF0000" size={25} />))}
            <button className={styles.btnA} onClick={verifica_resp} value='C'>{bd_dados.map((r) => r.opcao_c)}</button>{showResp && resp == 'C' && (bd_dados.map((res, index) => res.ver_c == true ? <FcOk size={25} /> : <IoCloseCircle color="#FF0000" size={25} />))}
            <button className={styles.btnA} onClick={verifica_resp} value='D'>{bd_dados.map((r) => r.opcao_d)}</button>{showResp && resp == 'D' && (bd_dados.map((res, index) => res.ver_d == true ? <FcOk size={25} /> : <IoCloseCircle color="#FF0000" size={25} />))}
            <div className={styles.container_btn}>{showResp && (<button className={styles.btnArrow} onClick={next_question}><FiArrowRightCircle /></button>)}</div>
        </div>
    )
    // #AAAAAA - cor cinza 
    // o map pega cada valor do array, o 'e' representa o valor, se eu quiser pegar o valor de a eu uso 'e.a' ou se quiser pegar de b 'e.b' e assim sucessivamente 
}

export default Questions