import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Pagination from '../componants/Pagination'
// import Card from '../componants/Card'

export default function All({ language = "all" }) {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    // const [err, setErr] = useState(false)


    const getData = ({ language, page }) => {
        setLoading(true)
        fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${language}+page=${page}&per_page=10`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.items)
                setLoading(false)
            })

    }


    useEffect(() => {
        getData({ page, language })
    }, [page, language])

    // if (err) {
    //     return <img src="https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.gif" alt="" />
    // }

    if (loading) {
        return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="" />
    }
    return (
        <div className='main-container'>
            <div className='main-con-all'>
                {
                    data.map((ele) => (
                        <a key={ele.id} href={ele.clone_url} target="_blank" >
                            <img src={ele.owner.avatar_url} alt="" />
                            <h3>{ele.name}</h3>
                            <h4 className='language'>{ele.language}</h4>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ backgroundColor: 'yellow' }}>	&#10032;</span>  <p>{ele.stargazers_count}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img style={{ width: '20px' }} src="https://img.icons8.com/fluency/512/code-fork.png" alt="" />  <p>{ele.forks_count}</p>
                                </div>
                            </div>
                        </a>
                    ))
                }

            </div>
            <Pagination current={page} onChange={(value) => setPage(value)} total={10} />
        </div>
    )
}
