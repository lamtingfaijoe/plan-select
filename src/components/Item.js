import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { Clear } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';


const Item = ({text,IconOne,IconTwo,IconThree,vw1,vw2,vw3}) => {
    return (
       
            <div style={{display:"flex",borderBottom:'0.5px solid',padding:'10px'}}>
                <Typography variant="subtitle1" >{text}</Typography>
                {IconOne? <DoneIcon style={{paddingLeft:`${vw1}`,paddingRight:`${vw2}`}}/> :
                <ClearIcon style={{paddingLeft:`${vw1}`,paddingRight:`${vw2}`}} /> }
                {IconTwo? <DoneIcon style={{paddingRight:`${vw3}`}}/> :
                 <Clear style={{paddingRight:`${vw3}`}}/>}
                {IconThree? <DoneIcon/>:<Clear />}
                                             
            </div>
        
    )
}

export default Item
