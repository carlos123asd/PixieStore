import { createAsyncThunk } from "@reduxjs/toolkit";

export const imagesSearchThunk = createAsyncThunk('imagesSearch', async (keyword) => {
    let response;
    console.log('keyword fetch',keyword);
    if(keyword != null){
        response = await fetch(`https://api.unsplash.com/search/photos?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA&page=10&per_page=20&query=${keyword}`);
    }else{
        response = await fetch('https://api.unsplash.com/photos/random/?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA&count=15');
    }
    try{
        if(response.ok){
            return response.json()
        }
    }catch(error){
        console.log(error);
    }
});
//https://api.unsplash.com/photos/?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA
//https://api.unsplash.com/photos/random/?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA&count=10