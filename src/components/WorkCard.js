import React from "react";

const WorkCard = (props) => {
        var {id,description,duration} = props.contact;
        console.log(props.contact.duration);
    return(
        <div className="item">
            <div className="content">
                <div className="header">{description}</div>
                <div>{duration} mins</div>
            </div>
            <i  className="trash alternate outline icon"
                style={{color:"red", position:"absolute", right:"10px", top:"15px",width:"50px",height:"auto"}}
                onClick={()=> props.clickHandler(id)}
            ></i>
        </div>
    );
};

export default WorkCard;