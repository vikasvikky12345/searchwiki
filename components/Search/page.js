"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";


const Search = ()=>{
    const router = useRouter()
    const[search,setSearch]=useState('')
    function handleSubmit(e){
        e.preventDefault()
        router.push(`./${search}/`)
        setSearch('')

    }
    return(
        <form className="w-50 p-5 text-black"  onSubmit={handleSubmit}>
            <input type='text' placeholder="search..." value={search} onChange={((e)=>setSearch(e.target.value))} className="text-xl rounded-xl m-2 text-black p-2"/>
            <button className="p-2 rounded-xl border text-white">Search</button>
        </form>
    )
}
export default Search;