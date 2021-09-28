import React from 'react';
import { makeStyles} from '@mui/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';


function Todolist() {
    const useStyles = makeStyles((theme) => ({
        box: {
        marginLeft: 'auto',
        marginRight: 'auto',      
        },
        title: {     
        color: 'black',                                
        },
        root: {          
        textAlign:'center',
        marginTop: 100,
        },  
        container: {
            margin: 70, 
            display: 'flex',
            justifyContent: 'flex-start',                         
        },
    stack: {
        width: '500'     
    },
    items: {
        marginLeft: 70
    }
    }))

    const classes = useStyles();

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body3,
        padding: theme.spacing(2),
        textAlign: 'center',
        width: '400',
    }));
    return(
        <div className={classes.root}>
            <Box sx={{width: 1000, height: 1000, bgcolor:'#deeaed', p:4}} className={classes.box}>
                <Typography className={classes.title} variant='h3'>To do list</Typography>

                <Box className={classes.container} sx={{'& > :not(style)': { m: 1 }}}>                
                    <TextField id="standard-basic" label="Add a new task" variant="outlined"/>
                    <Fab color="primary" aria-label="add">
                    <AddIcon />
                    </Fab>                                               
                </Box>

                <Stack spacing={2} alignItems="flex-start" className={classes.items}>
                <Item>
                    <Checkbox size='medium'/>
                    Cumpara cartofi
                </Item>
                <Item>
                    <Checkbox size='medium'/>
                    Spala vasele
                </Item>
                <Item>
                    <Checkbox size='medium'/>
                    Pleaca in vacanta
                </Item>
                </Stack>
            </Box>            
        </div>
    )
}

export default Todolist;