import { createAsyncThunk } from "@reduxjs/toolkit";

export const downloadThunk = createAsyncThunk('download', async (url, name) => {
   const req = await fetch(url)
   try{
   const blob = await req.blob()
   const uri = window.URL.createObjectURL(blob)
   const a = document.createElement('a')
   a.style.display = 'none'
   a.href = uri
   a.download = name
   document.body.appendChild(a)
   a.click()
   window.URL.revokeObjectURL(uri)}catch(error){
        console.log('Error de Descarga', error);
   }
});