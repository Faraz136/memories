import React, {useEffect, useState } from 'react'
import {Container , AppBar, Typography ,Grow ,Grid , Button} from '@material-ui/core';
import Form from './components/Form/Form';
import {useDispatch} from 'react-redux';
import Posts from './components/Posts/Posts';


import makeStyles from './styles'

const App = () => {

   const [currentId , setCurrentId] =useState('');


    const dispatch = useDispatch;

    const init = ()=>{

        
    }
    init();
    
    const styles = makeStyles()
    
    // useEffect(() => {
        
        
    //     dispatch({type: 'FETCH_ALL'})


    //     } , [])
         
        


    return (
        <div>

         <Container maxWidth= 'lg'>
              
                  <AppBar className = {styles.appBar} position ='static' color = 'inherit' > 
                   <Typography className = {styles.heading}align = 'center' variant = 'h3'>Memories
                                
                   
                   </Typography>
                   <img className ={styles.image} src= 'logo.png' alt="memories" height = '80' width="60" />
                  </AppBar>

                  <Grow in>
                      
                    <Container>
                        
                        <Grid container justify="space-between" alignItems= "stretch" spacing = {3}>
                            
                            <Grid item xs={12} sm ={7}>
                                
                                <Posts setCurrentId={setCurrentId} />

                                
                                 </Grid>

                                 <Grid item xs={12} sm ={4}>
                                
                                <Form currentId = {currentId}  setCurrentId={setCurrentId} />
                                
                                 </Grid>
                            
                             </Grid>
                        
                         </Container>   
                    
                       </Grow>
             
              </Container>
            
        </div>
    )
}

export default App;
