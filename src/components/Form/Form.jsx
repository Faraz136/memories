import React, { useEffect, useState } from "react";
import makeStyles from "./styles";
import FileBase from "react-file-base64";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import {useDispatch} from 'react-redux' ;
import {fetchPosts} from '../../api/index'

const Form = ({currentId , setCurrentId} ) => {

  const [posts ,  setPosts] = useState([]);

  useEffect(()=>{

          
    const getPosts = async()=>{

        const data = await fetchPosts() ;

         setPosts(data);

        console.log(posts);

    }
      getPosts();


} , [])

const post = currentId ? posts.find((p)=>p._id==currentId) : null




const dispatch = useDispatch();
const styles = makeStyles();
const [postData, setPostData] = useState({
  creator: "",
  title: "",
  message: "",
  tags : "",
  selectedFile: "",
});

useEffect(()=>{

  if(post) setPostData(post) ;

} , [post])

  
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if(currentId){
      dispatch({type: 'UPDATE' , currentId  , payload : postData})
    }else{

      dispatch({type: "CREATE" ,  payload: postData});

    }


  };


  const clear = () => {

  }
  return (
    <div>
      <Paper className={styles.paper}>
        <form
         
          autoComplete="off"
          noValidate
          
          className={`${styles.root } ${styles.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6"> Create A Memory </Typography>

          <TextField
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />

          <div className={styles.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>

          <Button className={styles.buttonSubmit} color="primary" size="large" type="submit" fullWidth variant = "contained" >Submit </Button>
          <Button  color="secondary" size="small" onClick={clear}fullWidth variant = "contained" >Clear </Button>

        </form>
      </Paper>
    </div>
  );
};

export default Form;
