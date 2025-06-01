import {useState, useEffect} from 'react';

function useAnimeInfo(animeInfo){
 
  const [data, setData] = useState ({})

  useEffect(()=>{

    fetch(`https://api.jikan.moe/v4/anime/${animeInfo}`)
    .then((res)=>res.json())
    .then((res)=>{setData(res.data)})

  },[animeInfo])

  return data;
}
export  default useAnimeInfo;