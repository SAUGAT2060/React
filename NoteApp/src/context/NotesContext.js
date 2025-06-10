import React, { createContext, useContext, useState } from 'react'


export const notesContext = createContext({
notes :[
  {
    id:1,
    content:"Hi I am gonna code until i pass out",
    completed:false,
  }
],
addNotes:(note)=>{},
updateNotes:(id,content)=>{},
deleteNotes:(id)=>{}
})

export const NotesContextProvider = notesContext.Provider

export function useNotes(){

  return useContext(notesContext)
 } 
