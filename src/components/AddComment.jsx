import React from 'react';
import "../assets/css/comment.css";
class AddComment extends React.Component {
    state = {comment:""}

    add = (e) => {
        e.preventDefault();
        if(this.state.comment===""){
            alert("All the fields are Mandatory");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({comment:""});
    }
    render() {
        return (
            <div className="card">
                    <input 
                    placeholder="Add a comment..." 
                    type="text" 
                    className="textInput" 
                    value={this.state.comment}
                    onChange={(e)=> this.setState({comment:e.target.value})}
                    />
                <button onClick={this.add}>Comment</button>
            </div>
        );
    }
}

export default AddComment;