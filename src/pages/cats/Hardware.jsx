import React from 'react';
import Forum from "../forum";

function Hardware(props) {
    return (
        <div>
            {/*<h3>Posts with Overwatch Tag</h3>*/}
            <Forum text={"Posts with Hardware Tag:"} cat_id={600}/>
        </div>
    );
}
export default Hardware;
