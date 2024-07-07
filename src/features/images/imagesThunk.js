import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchRandomImagesListThunk = createAsyncThunk('images/getRandomImagesList', async () => {
    const response = await fetch('https://api.unsplash.com/photos/random/?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA&count=10')
        try{
            if(response.ok){
                const json = await response.json()
                return json
            }
        }
        catch(error){
            console.log(error);
        }
    
});

//https://api.unsplash.com/photos/?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA
//https://api.unsplash.com/photos/random/?client_id=rK1dqeOujRJk0Ta-s_WkJNKp9XhAE3ZSHKf-xc5z-dA&count=10