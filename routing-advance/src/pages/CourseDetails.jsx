import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {

    const Params = useParams()

    return (
        <div>
            <h1>{Params.id} Courses Details</h1>
        </div>
    )
}

export default CourseDetails

