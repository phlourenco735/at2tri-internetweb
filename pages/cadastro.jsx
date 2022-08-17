import Create from "../components/create"
import Head from 'next/head'

export default function Cadastro(){
    return(
        <>
        <Head>
            <title>Cadastro</title>
        </Head>
            <main className="container">
            <div class="d-grid gap-2 col-6 mx-auto">
                <Create/>
                <a type="button" href="/lista" className='form-control btn btn-warning'>LISTA DE COMPRAS</a>
            </div>
            </main>
        </>
    )
}