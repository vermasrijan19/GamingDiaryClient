import React from 'react';
import Forum from "../forum";

function Valorant(props) {
    return (
        <div>
            {/*<h3>Posts with Overwatch Tag</h3>*/}
            <Forum text={"Posts with Valorant Tag:"} cat_id={500}/>
        </div>
    );
}

export default Valorant;
