import React from 'react'
import { useFetch } from '../Hooks/useFetch'

const Index = () => {

    const url = "http//loaclhost/5000"
    const {loading, error, apiData} = useFetch(url);

    
  return (
    <div>Index</div>
  )
}

export default Index