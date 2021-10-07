import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { add, complete } from '../features/editList/editList';
import { makeStyles} from '@mui/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


function Todolist({id, title, completed}) {
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

    const tasks = useSelector((state)=>state.edit);

    const dispatch = useDispatch();

    const [value, setValue] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(
            add({
                title: value,
            }),
            complete({
                id: id,
                completed: !completed,
            })
        )
    }

    const completeTask = () => {
        dispatch(
            complete({
                id: id, 
                completed: !completed,
            })
        )
    } 

    return(
        <div className={classes.root}>
            <Box sx={{width: 1000, height: 1000, bgcolor:'#deeaed', p:4}} className={classes.box}>
                <Typography className={classes.title} variant='h3'>To do list</Typography>

                <Box className={classes.container} sx={{'& > :not(style)': { m: 1 }}}>                
                    <TextField id="standard-basic" label="Add a new task" variant="outlined" onChange={(e)=>setValue(e.target.value)}/>
                    <Fab color="primary" aria-label="add" onClick={onSubmit}>
                        <AddIcon />
                    </Fab>                                               
                </Box>

                <Stack spacing={2} alignItems="flex-start" className={classes.items}>
                {
                    tasks.map((task) => (
                        <Item>
                            <input type="checkbox" checked={completed} onChange={completeTask} />
                            {task.title}
                        </Item>
                    ))
                }                
                </Stack>
            </Box>            
        </div>
    )
}

export default Todolist;