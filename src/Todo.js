import { ListItem, ListItemText , List, ListItemAvatar } from '@material-ui/core'
import React from 'react'
import './Todo.css'

function Todo(props) {
    return (
        <div>
            <List class="Todo_list">
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.text} secondary="Deadline" />
                </ListItem>
            </List>
            
        </div>
    )
}

export default Todo  


  

