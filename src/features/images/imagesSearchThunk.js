import { createAsyncThunk } from "@reduxjs/toolkit";

export const imagesSearchThunk = createAsyncThunk('imagesSearch', async (arg) => {
    let response;
    console.log(arg)
    if(arg.type === 'random'){
        response = await fetch(`https://api.unsplash.com/search/photos?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA&page=${arg.pag}&per_page=20&query=${arg.type}`);
        const content = await response.json();
        return content
    }else{
        response = await fetch(`https://api.unsplash.com/search/photos?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA&page=${arg.pag}&per_page=20&query=${arg.query}`);
        const contentrandom = await response.json();
        return contentrandom
    }
});
//random -> https://api.unsplash.com/search/photos?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA&page=10&per_page=20&query=random


//random antes -> https://api.unsplash.com/photos/random/?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA&count=15