import {useState, useEffect} from 'react';

function useAnimeInfo(animeInfo){
 
  const [data, setData] = useState ({})

  useEffect(()=>{

    fetch('https://api.jikan.moe/v4/anime/21')
    .then((res)=>{res.json()})
    .then((res)=>{setData(res[character])})

  },[])



}


export  default useAnimeInfo;