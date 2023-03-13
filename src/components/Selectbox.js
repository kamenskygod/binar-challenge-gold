import React from 'react';

const SelectBox = ({ label = "", title = "", data = [], ...props }) => {
    return (
        <div className="form-group" style={{ width: "14rem" }}>
            <label className='form-label-searchbar fw-light mb-1'>{label}</label>
            <select {...props} className="form-control form-input-searchbar" placeholder='Masukan Kapasitas Mobil' id="inputGroupSelect01">
                <option selected value={""} disabled>{title}</option>
                {data.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectBox;