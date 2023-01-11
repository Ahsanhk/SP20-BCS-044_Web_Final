import React from 'react';
import '../card.css'

const Card = ({title, body, tags}) => {
    return (
        // <form onSubmit={handleSubmit}>  
            <div className='cardContainer'>
                <div className="card">
                    <div className="card-title">
                        
                        <h2>{title}</h2>
                    </div>
                    <div className="card-body">
                        <p>
                            {body}
                        </p>
                    </div>
                    <div className='card-tags'>
                        <h5>tags: </h5>
                        <p>{tags } </p>
                    </div>
                </div>
            </div>  
        // </form>
    );
}
 
export default Card;