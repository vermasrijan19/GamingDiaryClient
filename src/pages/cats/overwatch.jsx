import React from 'react';
import Forum from "../forum";

function Overwatch(props) {
    return (
        <div>
            {/*<h3>Posts with Overwatch Tag</h3>*/}
            <Forum text={"Posts with Overwatch Tag:"} cat_id={100}/>
        </div>
    );
}

export default Overwatch;
