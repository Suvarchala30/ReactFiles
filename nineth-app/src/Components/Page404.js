import React from "react";

import { Link ,NavLink } from 'react-router-dom'
function Page404(){
    return(
        <div>

            <img src="https://images-na.ssl-images-amazon.com/images/I/41bLP6NzvKL.jpg" alt="404-image" height="550" />
            <div className="back-link">
<Link className="route-link" to="/">Back</Link></div>

        </div>
    )
}

export default Page404