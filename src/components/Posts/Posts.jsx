import React, { useEffect, useState } from 'react'
import Post from './Post/Post'
import { Grid , CircularProgress } from '@material-ui/core'
import makeStyles from './styles'
import {fetchPosts} from '../../api/index'

const Posts = ({setCurrentId}) => {
    
    const styles = makeStyles()
    const [postData ,  setPostData] = useState([]);

    useEffect(()=>{

          
        const getPosts = async()=>{

            const data = await fetchPosts() ;

             setPostData(data);

            

        }
          getPosts();


    } , [])

    if(!postData){
        return <h1>Loading .....</h1>
        
    }else{
        
        console.log(postData);
    }

    
    return (
        

          !postData.length ? <CircularProgress /> : (
          
          
          <Grid className = {styles.mainContainer} container alignItems = "stretch" spacing= {3}>
              
            {postData.map((post)=>(

                   <Grid item  key= {post._id} xm= {12 }  sm= {6} > 
                   
                   <Post  post={post} setCurrentId = {setCurrentId} / >
                   
                    </Grid>
                    

            ))}
              
              
               </Grid> )
            
        
    )
}

export default Posts
