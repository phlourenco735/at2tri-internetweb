import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Foodle</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"/>
      </Head>
      <main className='container'>
      <div class="d-grid gap-2 col-6 mx-auto">
        <img src="/images/didi.png" class="rounded-circle mx-auto d-block rounded-4 img-fluid w-75 p-3"/><br/>
        <h3 class="text-center">Evite o desperdicio de comida! Organize os alimentos por melhor validade.</h3><br/>
        <a type="button" class="btn btn-warning" href='/cadastro'>Começar!</a>
      </div>
      </main>
    </>
  )
}
