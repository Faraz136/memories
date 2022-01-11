import {createPost , fetchPosts , updatePost} from '../api/index'



let posts = [fetchPosts()];

const postsFetchInitial = async () => {

    posts.push(await fetchPosts())
          

}

postsFetchInitial();


const postReducer= (initialState = posts, newState) =>{

   switch (newState.type) {
       case "FETCH_ALL":
        posts.push(fetchPosts())
       return posts
           
       case "CREATE" :
        
        createPost(newState.payload) ;
        // posts.push(newState.payload)
       return posts

       case "UPDATE" :

         updatePost(newState.payload._id , newState.payload)

        return posts;

       default:
           return posts
   }

}

export default postReducer