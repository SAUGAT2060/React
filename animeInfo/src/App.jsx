import { useEffect, useState } from 'react'

import './App.css'
import useAnimeInfo from './Hoook/useAnimeInfo'

function App() {
  const anime = useAnimeInfo(21);
 const apiId ='Api';
 return (
 

  <>
  <label
   htmlFor={apiId} 
  >Api for Anime : </label>
  <input
 
  id={apiId}
     placeholder='Code to get the Anime'/>
     
     
     <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex items-center justify-center p-6">
       {anime.title ? (
         <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-2xl w-full">
           <h1 className="text-3xl font-bold mb-4 text-center">{anime.title}</h1>
           <img
             src={anime.images?.jpg?.image_url}
             alt={anime.title}
             className="w-full h-auto rounded-xl shadow-md mb-4" />
           <p className="text-base text-white/80 leading-relaxed">{anime.synopsis}</p>
         </div>
       ) : (
         <p className="text-xl text-white animate-pulse">Loading anime info...</p>
       )}
     </div>
     </>
);

}

export default App
