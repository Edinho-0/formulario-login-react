import React, { useState, useEffect } from 'react';

import './index.css';

import imgFacebook from './img/facebook.png';
import imgGoogle from './img/google-plus.png';
import imgIn from './img/linkedin.png';
import mail from './img/mail.png';
import user from './img/user.png';
import lock from './img/lock.png';

const Form = () => {
    const [h1Text, setH1Text] = useState<string>();
    const [pText, setPText] = useState<string>();
    //h1, p do fomulario
    const [h2Text, setH2Text] = useState<string>();
    const [p2Text, setP2Text] = useState<string>();
    const [textButton, setTextButtom] = useState<string>();

    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(true);

    const [campoNome, setCampoNome] = useState(true);

    function Animation() {
        setLeft(!left);
        setRight(!right);
    }

    useEffect(function() {
        setTimeout(() => {
            setH1Text(!left ? "Criar uma conta" : "Logar em uma conta");
            setPText(!left ? "Use o email para criar a conta" : "Use seu email para logar na conta");
            setH2Text(!left ? "Bem vindo de volta!" : "Novo aqui?");
            setP2Text(!left ? "informe seus dados para fazer o login" : "crie uma conta para acessar o site");
            setTextButtom(!left ? "Registra" : "Login");
            setCampoNome(!campoNome);
        }, 200);
    }, [left])

    return (
        <div id="conteiner">
            <div id="divAni" className={left ? "leftToRight" : "leftToRight2"}>
            <h1>{ h2Text }</h1>
            <p>{ p2Text }</p>
                <button onClick={Animation}>
                    { !left ? "Login" : "Registra-se" }
                </button>
            </div>

            <div id="form" className={right ? "rightToLeft2" : "rightToLeft"}>
                <h1>{ h1Text }</h1>
                <ul>
                    <li className="btnConta">
                        <img src={imgFacebook} alt="facebook"/>
                    </li>

                    <li className="btnConta">
                        <img src={imgGoogle} alt="google plus"/>
                    </li>

                    <li className="btnConta">
                        <img src={imgIn} alt="linkedin"/>
                    </li>
                </ul>

                <p>{ pText }</p>
                <form>
                    { campoNome ?
                         "" :
                         (<div className="inputIcon">
                            <img src={user} />
                            <input type="text" placeholder="Nome"/>
                        </div>)
                    }

                    <div className="inputIcon">
                        <img src={mail} />
                        <input type="text" placeholder="Email"/>
                    </div>

                    <div className="inputIcon">
                        <img src={lock} />
                        <input type="text" placeholder="Senha"/>
                    </div>

                    <button type="submit">
                        { textButton }
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form;
