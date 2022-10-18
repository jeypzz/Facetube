import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {

    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) =>{
        return(
            <Comment 
                contact={contact} 
                clickHandler={deleteContactHandler} 
                key={contact.id}
            />
        );
    });
    return (
        <div className="List">
            <h1>Comment Section</h1>
            {renderContactList}
        </div>
    );
}

export default CommentList;