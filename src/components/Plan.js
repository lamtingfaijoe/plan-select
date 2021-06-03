import React from 'react'
import Typography from '@material-ui/core/Typography';


const Plan = () => {
    return (
        <div >
            <div style={{display:'flex',justifyContent:"space-around",padding:"5vh"}}>
            <div style={{paddingLeft:"100px",paddingRight:"100px"}}></div>
           <Typography variant="subtitle1" style={{padding:'5px', border:"1px solid"}}>Standard Plan</Typography>
           <Typography variant="subtitle1" style={{padding:'5px',border:"1px solid"}}>Premium Plan</Typography>
           <Typography variant="subtitle1" style={{padding:'5px',border:"1px solid"}}>Discounted Plan</Typography>
           </div>

           
           
        </div>
    )
}

export default Plan
