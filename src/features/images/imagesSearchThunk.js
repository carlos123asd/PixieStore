import { createAsyncThunk } from "@reduxjs/toolkit";

export const imagesSearchThunk = createAsyncThunk('imagesSearch', async (keyword) => {
    let response;
    
    if(keyword != null){
        response = await fetch(`https://api.unsplash.com/search/photos?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA&page=10&per_page=20&query=${keyword}`);
        const content = await response.json();
        console.log('fetch',content);
        return content.results
    }else{
        response = await fetch('https://api.unsplash.com/photos/random/?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA&count=15');
        const contentrandom = await response.json();
        return contentrandom
    }
});
//https://api.unsplash.com/photos/?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA
//https://api.unsplash.com/photos/random/?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA&count=10