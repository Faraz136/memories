import axios from 'axios';

const url = "http://localhost:5000/posts";

export const fetchPosts =async ()=> {

try {

    const {data}  =await axios.get(url)
    return data ;
      
    
    
} catch (error) {
    console.log(error.message);
}



}  

export const createPost = async (newPost)=> {
      

    try {
        
       const {data} =await axios.post(url, newPost)

       return data ;

    } catch (error) {

        console.log(error.message);
        
    }

}

export const updatePost = async (id , postData)=>{

     try {
                
      const {data} = await axios.patch(url  , postData)

      return data
         
     } catch (error) {
         console.log(error.message);
     }


}