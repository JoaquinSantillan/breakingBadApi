import '../styles/Home.css'
import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'




export const Home = () => {

    const [dataFetch,setDataFetch] = useState(null)
    const [data,setData] = useState(null)

    useEffect(()=>{
        async function dataApi(){
            const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/')
            const data = await res.json()
            setDataFetch(data[0].author)
            setData(data[0].quote)
            console.log(data[0].author)
        }
        dataApi()
    },[])

    const reloadPage = ()=>{
        async function dataApi(){
            const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/')
            const data = await res.json()
            setDataFetch(data[0].author)
            setData(data[0].quote)
            console.log(data[0].author)
        }
        dataApi()
    }

    return (
    <div>
        <Nav reloadPage={reloadPage}/>
        <div className='container'>
            <div className='content'>
            <div className='txt'>
                <p>
                {data}
                </p>
            </div>

            <div className='author'>
                <h4>{dataFetch}</h4>
            </div>
            </div>
        </div>
    </div>
    )
}
