import React from 'react'
import { Card , CardActions , CardMedia , Typography , CardContent , Button } from '@material-ui/core'
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt' 
import { BsHandThumbsUpFill } from "react-icons/bs";
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz' ;
import makeStyles from './styles'
import moment from 'moment'
const Post = ({post , setCurrentId}) => {
    const styles = makeStyles()
    return (
      
      
      <Card className={styles.card}  > 
              <CardMedia className = {styles.media} image = {post.selectedFile} title = {post.title} />

              <div className = {styles.overlay}>
                  
                  <Typography variant = 'h6'> {post.creator} </Typography>
                  <Typography variant = 'body2'> {moment(post.createdAt).fromNow()} </Typography>

              </div>

              <div className = {styles.overlay2}>

                <Button style = {{color : "white"}} size= 'small' onClick = {()=>setCurrentId(post._id)} >
                    
                    <MoreHorizIcon fontSize = 'default' />
                    
                     </Button>
            </div>

            <div className = {styles.details}>

            <Typography variant = 'body2' color = 'textSecondary'> {post.tags.map((tag)=>tag)} </Typography>
                 

            </div>

            <CardContent>
                
            <Typography className= {styles.title} variant = 'h5' gutterBottom> {post.message} </Typography>
                
                 </CardContent>

                 <CardActions className ={styles.cardActions} > 
                 
                 <Button size= 'small' color= 'primary' onClick = {()=>{}}>
                     
                     <BsHandThumbsUpFill  fontSize = 'small' /> 
                     {post.likeCount}
                     likes
                     
                      </Button>

                      <Button size= 'small' color= 'primary' onClick = {()=>{}}>
                     
                     <DeleteIcon fontSize = 'small' /> 
                     Delete
                     
                     
                      </Button>
                 
                 </CardActions>

      </Card>

    )
}

export default Post
