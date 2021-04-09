import React from 'react';
import Forum from "../forum";

function Help(props) {
    return (
        <div>
            {/*<h3>Posts with Overwatch Tag</h3>*/}
            <Forum text={"Posts with Help!! Tag:"} cat_id={800}/>
        </div>
    );
}

export default Help;
