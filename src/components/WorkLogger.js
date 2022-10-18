import React from 'react';
import "../assets/css/addContact.css";

class WorkLogger extends React.Component {
    state = {
        description:"",
        duration:"",
        Todo:"",
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.description==="" || this.state.duration===""){
            alert("All the fields are Mandatory");
            return;
        }else if (this.state.description.length <=5) {
            alert("Description must contain atleast 5 characters");
            this.setState({description:""});
            return;
        }
        if(this.state.Todo ==="Work") {
            this.props.addWorkHandler(this.state);
        } else {
            this.props.addPersonalHandler(this.state);
        }
        this.setState({description:"", duration:""});
    }
    render() {
        return (
            <div className="card">
                <h1>Work Logger</h1>
                <div className="textInputWrapper">
                    <select value={this.state.Todo} onChange={(e)=> this.setState({Todo:e.target.value})} className="select">
                        <option>Personal</option>
                        <option>Work</option>
                    </select>
                   </div>
                <div className="textInputWrapper">
                    <label>Description:
                        <input
                        type="text"
                        className="textInput"
                        placeholder='min 5 chars'
                        value={this.state.description}
                        onChange={(e)=> this.setState({description:e.target.value})}
                        />          
                    </label>
                </div>
                <div className="textInputWrapper">
                    <label>Duration:
                        <input 
                        type="text"
                        placeholder='Input between 0-240'
                        className="textInput"
                        value={this.state.duration}
                        onChange={(e)=> this.setState({duration:e.target.value})}
                        />
                    </label>
                </div>
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
}

export default WorkLogger;