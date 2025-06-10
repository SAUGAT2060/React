import React, { createContext, useContext } from 'react'

export const notesContext = createContext({
notes :[],
addNotes:()=>{},
updateNote:()=>{},
deleteNotes:()=>{}
})

export const notesContextProvider = notesContext.Provider

export function useNotes(){

  return useContext(notesContext)
 } 
