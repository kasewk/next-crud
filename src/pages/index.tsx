import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {

    const { cliente,
        clientes,
        selecionarCliente,
        excluirCliente,
        novoCliente,
        salvarCliente,
        tabelaVisivel,
        exibirTabela,
    } = useClientes()

    return (
        <div className="flex h-screen justify-center items-center bg-gradient-to-l from-purple-500 to-blue-500 text-white">

            <Layout titulo="Cadastro Simples">
                {tabelaVisivel ? (
                    <>
                        <div className="flex justify-end">
                            <Botao onClick={novoCliente} className="mb-4">Novo Cliente</Botao>
                        </div>
                        <Tabela
                            clientes={clientes}
                            clienteSelecionado={selecionarCliente}
                            clienteExcluido={excluirCliente}
                        />
                    </>
                ) : (
                    <Formulario
                        cliente={cliente}
                        cancelado={exibirTabela}
                        clienteMudou={salvarCliente}
                    />
                )}
            </Layout>
        </div>
    )
}
