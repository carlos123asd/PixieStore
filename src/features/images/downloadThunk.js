import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveAs } from 'file-saver'

export const downloadThunk = createAsyncThunk('download', async (url) => {
   url = url + '?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA'
   console.log(url);
   let req = await fetch(url) 
   console.log(req);
   try{
      let namefile = 'img0' + '.jpg';
      let blob = await req.blob()
      console.log(blob)
      saveAs(blob,namefile);
   }catch(error){
      console.log(error);
   }
});

 /*const req = await fetch(url)
   try{
   const blob = await req.blob()
   const uri = window.URL.createObjectURL(blob)
   const a = document.createElement('a')
   a.style.display = 'none'
   a.href = uri
   a.download = name
   document.body.appendChild(a)
   a.click()
  }catch(error){
        console.log('Error de Descarga', error);
   }*/