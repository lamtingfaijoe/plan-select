import React from 'react'
import Typography from '@material-ui/core/Typography';

const Header = () => {
    return (
        <div className="header" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "10vh",
          }}>
           <Typography variant="h3">Choose a plan</Typography>
        </div>
    )
}

export default Header
