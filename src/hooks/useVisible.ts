import { useState } from "react";

export default function useVisible() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>()

    const exibirTabela = () => setVisivel('tabela')
    const exibirForm = () => setVisivel('form')

    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirForm,
        exibirTabela
    }
}