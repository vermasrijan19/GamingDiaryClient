import React from 'react';
import Forum from "../forum";

function Apex(props) {
    return (
        <div>
            {/*<h3>Posts with Overwatch Tag</h3>*/}
            <Forum text={"Posts with Apex legends Tag:"} cat_id={200}/>
        </div>
    );
}

export default Apex;
