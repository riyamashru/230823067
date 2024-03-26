function Contact(props){
    return(
        <>
        <style>
            .icon{

            }
        </style>
         <div style={{ borderRadius: "10px", paddingLeft: "8px", marginLeft: "10px", border: "1px solid #ECECEC", marginTop: "8px", backgroundColor: "#FAFAFA", width: "250px", display: "flex", alignItems: "center" }}>
            <input type="text" placeholder="Search" style={{ borderRadius: "10px", backgroundColor: "#FAFAFA", border: "none", height: "25px", fontSize: "11px", flex: "1" }} />
            <img style={{ height: "12px", width: "12px", marginRight: "8px" }} src="assets/bar.png" alt="icon" />
        </div>
        </>
    )
}

export default Contact;


