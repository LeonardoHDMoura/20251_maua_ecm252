import axios from 'axios'
import striptags from 'striptags'
import React, { use, useEffect, useState } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText} from 'primereact/inputtext'
import { Button } from 'primereact/button'

const Busca = () => {

    const[termoDeBusca,setTermoDeBusca] = useState('')
    const[resultados, setResultados] = useState([])

    useEffect( ()=>{
        const buscar = async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php',{
                    params: {
                        action: 'query',
                        list: 'search',
                        format: 'json',
                        origin: '*',
                        srsearch: termoDeBusca
                    }
                }
            )
            setResultados(data?.query?.search)
            console.log(data)
        }
        const timeoutID = setTimeout(()=>{
            if(termoDeBusca) buscar()
        },500)
        return()=>{
            clearTimeout(timeoutID)
        }
    },[termoDeBusca])

    return (
        <div>
            <IconField iconPosition='left'>
                <InputIcon className='pi pi-search' />
                <InputText 
                placeholder='Buscar...' 
                onChange={(evento) => setTermoDeBusca(evento.target.value)}
                value={termoDeBusca}
                />
            </IconField>
            {
                resultados.map((resultado)=>{
                    return(
                        <div key={resultado.pageid}
                        className='my-2 border border-1 border-400'>
                            <div className="border-bottom border border-1 border-400 p-3 text-center font-bold">
                                {resultado.title}
                                <span>
                                    <Button
                                    icon='pi pi-send'
                                    className='ml-4 p-button-rounded p-button-secondary'
                                    onClick={()=>{window.open(`https://en.wikipedia.org?curid=${resultado.pageid}`)}}
                                    />
                                </span>
                            </div>
                            <div className="p-4">
                                {striptags(resultado.snippet)}
                            </div>
                        </div>
                    )
                })
            }
        </div>
  )
}

export default Busca