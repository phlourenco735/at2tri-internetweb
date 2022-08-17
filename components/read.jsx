import { useState,useEffect} from 'react'

//importar a config do firebase
import { database } from '../services/firebase'
import { collection, getDocs, orderBy, query, doc, deleteDoc, updateDoc, getDoc} from 'firebase/firestore';

//configurar o Firebase do projeto
const produto = collection(database,'produto')

export default function Read() {

  const [produtoLista,setProdutoLista] = useState([])
  const read = ()=>{
    getDocs(query(produto,orderBy("alimento")))
    .then((data)=>{
        setProdutoLista(data.docs.map((item)=>{
        return{...item.data(), id:item.id}
      }))
    })
  }

  useEffect(()=>{
    read()
  },[])

  //função delete
  const deleteBtn = (id)=>{
    let documento = doc(database,"produto",id)
    deleteDoc(documento)
    .then(()=>{
      read()
    })
  }

  //função updade
  const[ID,setID]=useState(null)
  const[produtoUnico,setprodutoUnico]=useState({})
  const[mostrar, setMostrar] = useState(false)
  const [alimento, setAlimento] = useState('')
  const [validade, setValidade] = useState('')

  const show = async(id)=>{
    setID(id)
    if(ID!=null){
      const produtoSimples = doc(database,"produto",ID)
      const resultado = await getDoc(produtoSimples)
      setprodutoUnico({...resultado.data(),id:resultado.id})
      setAlimento(produtoUnico.alimento)
      setValidade(produtoUnico.validade)
    }
    if(validade!=""){setMostrar(true)}
  }
  useEffect(()=>{show()},[ID])

  const bt_cancelar = ()=>{
    setMostrar(false)
    setAlimento("")
    setValidade("")
    setID(null)
  }

  const bt_alterar = (id)=>{
    const produtoShow = doc(database,'produto',id)
    updateDoc(produtoShow,{
      alimento:alimento,validade:validade
    }).then(()=>{
      setAlimento("")
      setValidade('')
      setID(null)
      read()
      setMostrar(false)
    })
  }

  //rotina de update fim
  return (
    <>
    {mostrar ?(
        <main className='container'>
          <div className='d-grid gap-2 col-6 mx-auto'>
            <h3 className="text-center">ALTERAR COMPRA CADASTRADA</h3>
            <input type="text" name="alimento" placeholder='Alimento' className='form-control' id="" required onChange={event=>setAlimento(event.target.value)} value={alimento} />
            <input type="date" name="validade" placeholder='Validade' className='form-control' id="" required onChange={event=>setValidade(event.target.value)} value={validade} />
            <input type="button" value="CANCELAR" className='form-control btn btn-outline-warning' onClick={bt_cancelar}/>
            <input type="submit" value="SALVAR" className='form-control btn btn-outline-warning' onClick={()=>bt_alterar(produtoUnico.id)}/>
          </div>
       </main>
    ):(
      <></>
    )}
        <main className='container'>
        <h3 className='text-center'>LISTA DE COMPRAS</h3>
        {produtoLista.map((lista)=>{
          return(
            <ul class="list-group cProductsList"> 
                <li class="list-group-item d-flex"><h4 class="p-0 m-0 flex-grow-1">{lista.alimento} {lista.validade}</h4> 
                   <button onClick={()=>show(lista.id)} class="btn btn-outline-dark">Alterar</button> 
                   <button onClick={()=>deleteBtn(lista.id)} class="btn btn-outline-dark">Excluir</button>              
                  <label class="btn btn-outline-dark"><input type="checkbox" autocomplete="off"/>Consumido</label>
                </li>
            </ul> 
            )
        })}
        </main>
    </>
  )
}
