import React from 'react';

export default function FormularioCad() {
    return (
        <>
            <fieldset className="fieldset w-xs bg-base-0  p-4 rounded-box">
                <legend className="fieldset-legend text-xl">Cadastro</legend>

                <label className="fieldset-label">Nome</label>
                <input type="text" className="input" placeholder="ex: João Silva Ferreira" />

                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="fieldset-label">Senha</label>
                <input type="password" className="input" placeholder="Senha" />

                <label className="fieldset-label">Confirmar Senha</label>
                <input type="password" className="input" placeholder="Senha" />

                <button className="btn btn-neutral mt-4 bg-violet-500">Cadastrar</button>

                <p>Já possui Cadastro? <a className="link link-primary" href='@/scr/Pages/Login/Login'>Clique aqui</a></p>
            </fieldset>
        </>
    )
}