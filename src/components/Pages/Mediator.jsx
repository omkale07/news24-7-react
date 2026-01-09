import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card';
import axios from 'axios';

const Mediator = (props) => {

const [data, setData] = useState([]);


const filterData = data.filter((item)=>{
    return item.title?.toLowerCase().includes(props.search.toLowerCase())
  });


useEffect(() => {
axios.get("https://api.mediastack.com/v1/news",{
   params: {
    access_key: `${props.apiKey}`,
    categories: `${props.category}`,
    languages: "en",
    countries: "in",
    limit: 40,
    sort: "published_desc"
  }
})
.then((response)=>{
// console.log(response)
console.log(response.data.data)
setData(response.data.data)
})
.catch((error)=>{
  console.log(error)
})
}, [props.category, props.apiKey])

  return (
    <div className='card-container'>
    <Card NewsData={filterData}/>
    </div>
  )
}

export default Mediator