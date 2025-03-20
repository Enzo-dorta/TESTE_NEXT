import React from 'react';

export default function FormularioLog() {
    return (
        <>
            <fieldset className="fieldset w-xs bg-base-0  p-4 rounded-box">
                <legend className="fieldset-legend text-xl">Login</legend>

                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="fieldset-label">Senha</label>
                <input type="password" className="input" placeholder="Senha" />

                <button className="btn btn-neutral mt-4 bg-violet-500">Entrar</button>

                <p>Não possui Cadastro? <a className="link link-primary" href='@/scr/Pages/Cadastro/Cadastro'>Clique aqui</a></p>
            </fieldset>
        </>
    )
}