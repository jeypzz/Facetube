import React, {useState} from 'react';
import FacebookEmoji from "../utils/constants";
import "../assets/css/comment.css";
const Comment = (props) => {
    var {comment} = props.contact;
    const [countLike, setCountLike] = useState(0);
    const [countLove, setCountLove] = useState(0);
    const [countHaha, setCountHaha] = useState(0);
    const [countYay, setCountYay] = useState(0);
    const [countWow, setCountWow] = useState(0);
    const [countSad, setCountSad] = useState(0);
    const [countAngry, setCountAngry] = useState(0);
    return (
        <div className="item">
            <img className="avatar" src={require("../assets/images/user.png")} alt="user icon" style={{width:"50px",height:"auto", marginRight:"30px"}}></img>
            <div className="content">
                <div className="header">
                    <div className="emoji">
                        <button onClick={() => setCountLike(countLike + 1)}><FacebookEmoji type="like" /></button>
                        <p>{countLike}</p>
                        <button onClick={() => setCountLove(countLove + 1)}><FacebookEmoji type="love" /></button>
                        <p>{countLove}</p>
                        <button onClick={() => setCountHaha(countHaha + 1)}><FacebookEmoji type="haha" /></button>
                        <p>{countHaha}</p>
                        <button onClick={() => setCountYay(countYay + 1)}><FacebookEmoji type="yay" /></button>
                        <p>{countYay}</p>
                        <button onClick={() => setCountWow(countWow + 1)}><FacebookEmoji type="wow" /></button>
                        <p>{countWow}</p>
                        <button onClick={() => setCountSad(countSad + 1)}><FacebookEmoji type="sad" /></button>
                        <p>{countSad}</p>
                        <button onClick={() => setCountAngry(countAngry + 1)}><FacebookEmoji type="angry" /></button>
                        <p>{countAngry}</p>    
                    </div>
                    {comment}
                    </div>
                
            </div>
        </div>
                       
        
  );
}

export default Comment;