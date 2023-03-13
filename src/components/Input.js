import React from 'react';


const Input = ({ label, ...props }) => {
    return (
        <div className="form-group">
            <label className='form-label-searchbar fw-light mb-1'>{label}</label>
            <input {...props}></input>
        </div>
    )
}
export default Input;