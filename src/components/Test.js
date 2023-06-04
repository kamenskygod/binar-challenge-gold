import React from "react";
import { useNavigate } from "react-router-dom";
import Segment from "./Segment";

const BackButton = ({ children, ...props }) => {
    const navigate = useNavigate()

    const goBack = () =>{
        navigate(-1)
    }

    return(
        <Segment className='d-flex gap-3 align-items-center title-form' style={{cursor: "pointer"}} onClick={goBack} {...props}>
            <i class="fa-solid fa-arrow-left"></i>
            {children}
        </Segment>

    )
}

export default BackButton