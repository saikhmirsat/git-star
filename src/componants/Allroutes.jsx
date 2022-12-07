import React from 'react'
import { Route, Routes } from 'react-router-dom'
import All from '../Page/All'
import Css from '../Page/Css'
import Html from '../Page/Html'
import Js from '../Page/Js'


export default function Allroutes() {
    return (
        <Routes>
            <Route path="/all" element={<All />}></Route>
            <Route path="/html" element={<Html />}></Route>
            <Route path="/css" element={<Css />}></Route>
            <Route path="/js" element={<Js />}></Route>
        </Routes>
    )
}
