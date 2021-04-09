import React from 'react';
import Forum from "../forum";

function Software(props) {
    return (
        <div>
            {/*<h3>Posts with Overwatch Tag</h3>*/}
            <Forum text={"Posts with Software Tag:"} cat_id={700}/>
        </div>
    );
}

export default Software;
