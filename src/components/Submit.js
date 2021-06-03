import React from 'react'
import {useState} from 'react'


const Submit = () => {
    const [object, setobject] = useState({});
    const [planSelected, setplan] = useState({});

    const onChangeValue = (event) => {
        setplan(event.target.value)
        console.log(planSelected)
    }
    const handleSubmit = (planSelected) =>{
        try{
            if(planSelected === 'standard'){
                setobject({
                    "general":"true",
                    "specialist":"false",
                    "Physlotherapy":"false",
                })
                alert("Standard plan is selected")
            }
            else if(planSelected === 'premium'){
                setobject({
                    "general":"true",
                    "specialist":"true",
                    "Physlotherapy":"true",
                })
                alert("Premium plan is selected")

            }
            else{
                setobject({
                    "general":"true",
                    "specialist":"true",
                    "Physlotherapy":"true",
                })
                alert("Discount plan is selected")
            }
        }
        catch(err){
            console.log(err.message)
        }
        
        
        
    }
    return (
        <div style={{paddingLeft:'41vw',display:'flex',flexDirection:'row'}}>
        <form onSubmit={()=> handleSubmit(planSelected)} >
        <div style={{display:'flex'}} onChange={onChangeValue}>
        <input type="radio" id="standard" name="gender" value="standard" />
        <label for="standard" style={{paddingRight:"14vw"}}><strong style={{fontSize:"20px"}}>HK$0/</strong>month</label><br/>
        <input type="radio" id="premium" name="gender" value="premium"/>
        <label for="premium" style={{paddingRight:"12.5vw"}}><strong style={{fontSize:"20px"}}>HK$388/</strong>month</label><br/>
        <input type="radio" id="discount" name="gender" value="discount" />
        <label for="discount"><strong style={{fontSize:"20px"}}>HK$100/</strong>month</label><br/>


        </div>
        <div >
        <button type='submit' style={{paddingLeft:"25vw",paddingRight:"25vw",border:"1px solid"}}><strong>Submit</strong></button>
        </div>
        
        
        </form> 
            
        </div>
        
    )
}

export default Submit
