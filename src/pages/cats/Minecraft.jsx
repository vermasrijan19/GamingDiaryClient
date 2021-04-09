import React from 'react';
import Forum from "../forum";

function Minecraft(props) {
    return (
        <div>
            {/*<h3>Posts with Overwatch Tag</h3>*/}
            <Forum text={"Posts with Minecraft Tag:"} cat_id={300}/>
        </div>
    );
}

export default Minecraft;
