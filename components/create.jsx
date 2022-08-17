import { useState} from 'react'
import { database } from '../services/firebase'
import { collection,addDoc } from 'firebase/firestore';

const produto = collection(database,'produto')

export default function Create() {

  const [alimento, setAlimento] = useState('')
  const [validade, setValidade] = useState('')

  const cadastrar = ()=>{
    addDoc(produto,
      { alimento:alimento,
        validade:validade
      }
      ).then(()=>{
        setAlimento('')
        setValidade('')
        window.location.reload()
      })
  }

  return (
    <>     
    <div>
        <h3 className='text-center'>CADASTRE ALIMENTO E SUA VALIDADE</h3><br/>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Alimento:</span>
            <input type="text" name="alimento" className='form-control' id="" required onChange={event=>setAlimento(event.target.value)} value={alimento}/>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Validade do alimento:</span>
            <input type="date" name="validade" placeholder='Validade' className='form-control' id="" required onChange={event=>setValidade(event.target.value)} value={validade}/>
        </div>
        <input type="submit" value="SALVAR" onClick={cadastrar} className='form-control btn btn-warning' />
    </div>
    </>
  )
}