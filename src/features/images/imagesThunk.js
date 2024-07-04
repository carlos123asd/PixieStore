import { createAsyncThunk } from '@reduxjs/toolkit'

export const getRandomImagesListThunk = createAsyncThunk('images/getRandomImagesList', async () => {
    const req = await fetch('https://api.unsplash.com/photos/random/?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA&count=10')
    if(req.ok){
        const json = await req.json()
        return json.results
    }
});

//https://api.unsplash.com/photos/?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA
//https://api.unsplash.com/photos/random/?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA&count=10