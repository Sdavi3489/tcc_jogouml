import React, { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import style from '../styles/Register.module.css'
import bcrypt from 'bcryptjs';
import Home from './Home';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const Register = () => {
    const [username, setUsername] = useState(''); // informações do usuario
    const [password, setPassword] = useState('');
    const [verpass, setVerpass] = useState('');
    const [dataUser, setDataUser] = useState([]);
    const [val, setVal] = useState();
    const [isValido, setIsvalido] = useState(false);



    async function onSubmitValues(e) {
        e.preventDefault();

        if (verpass === password) {

            // Função para criptografar a senha
            const hashPassword = async (password) => {
                try {
                    const salt = await bcrypt.genSalt(10); // Gerar um salt aleatório
                    const hash = await bcrypt.hash(password, salt); // Gerar o hash da senha com o salt
                    return hash;
                } catch (error) {
                    throw new Error('Erro ao criptografar a senha');
                }
            };

            // Criptografar a senha durante o registro
            const hashedPassword = await hashPassword(password);
            //console.log('Senha criptografada:', hashedPassword);

            const infoUser = { "username": username, "hash": hashedPassword }

            fetch('http://localhost:3000/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(infoUser),
            })
                .then(response => response.json())
                .then(data => {
                    setDataUser(data);
                    //console.log(data); // Dados retornados pela API após a requisição POST
                })
                .catch(error => {
                    console.log('Ocorreu um erro:', error);
                });

            setIsvalido(true);
            setVal(true);
        }
        else {
            setIsvalido(true);
            setVal(false);
        }
    }

    // useEffect(() => {
    //     fetch(`http://localhost:3000/user/${iduser}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setUser(data);
    //         })
    //         .catch(error => {
    //             console.log('Ocorreu um erro:', error);
    //         });
    // }, [password])

    return (
        <>
            <div className={style.containerHome}>
                <div className={style.backBtn}>
                    <Link className={style.returnBtn} to="/">Voltar</Link>
                </div>
                <div className={style.login}>
                    <form action="" onSubmit={onSubmitValues}>
                        <h2>Registre-se</h2>
                        <label className={style.userLabel}>Username: </label>
                        <input className={style.ipt} type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label className={style.userLabel}>Senha: </label>
                        <input className={style.ipt} type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label className={style.userLabel}>Verificar Senha: </label>
                        <input className={style.ipt} type="password" placeholder="Digite sua senha novamente" value={verpass} onChange={(e) => setVerpass(e.target.value)} />
                        <button className={style.btnEntrar} type='submit'>Entrar</button>
                        {isValido && (
                            val == true ? <Stack sx={{ width: '100%' }} spacing={2}>
                                <Alert severity="success">
                                    <AlertTitle>Sucesso</AlertTitle>
                                    <strong>Usuário Cadastrado com sucesso!</strong>
                                </Alert>
                            </Stack>
                                : <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="error">
                                        <AlertTitle>Erro</AlertTitle>
                                        As senhas não coincidem — <strong>Tente novamente!</strong>
                                        <a className={style.LinkLogin} href="/">Voltar para a página de login</a>
                                    </Alert>
                                </Stack>

                        )}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register