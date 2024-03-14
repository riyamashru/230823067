function Contact(props){
    return(
        <>
        <style>
            .icon{

            }
        </style>
        <div style={{"float": "left" ,borderRadius:"10px",padding:"6px" ,border:"none", marginTop:"8px", marginRight:"16px",  fontSize:"12px"}}>
           
            <input type="text" placeholder="search" style={{borderRadius:"3px"}}/>
            <img style={{height:"10px", width:"15px"}} src="assets/bar.jpg" alt="icon"/>
        </div>

        </>
    )
}

export default Contact;


