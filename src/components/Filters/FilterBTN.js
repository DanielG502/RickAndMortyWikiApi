import React from 'react';

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
    return (
        <div>
            {/* Eliminamos el elemento que seleccionaba el boton */}
            <style jsx='true'>
                {`
                    .x: checked + label {
                        backgraound-color: #0b5ed07;
                    }
                    input[type='radio'] {
                        display: none;
                    }
                `}
            </style>
            <div className='form-check'>
                <input
                    onClick={() => {
                        setPageNumber(1);
                        task(items);
                    }}
                    className='form-check-input x'
                    type='radio'
                    name={name}
                    id={`${name}-${index}`}
                />
                <label
                    className='btn btn-outline-primary'
                    htmlFor={`${name}-${index}`}>
                    {items}
                </label>
            </div>
        </div>
    );
};

export default FilterBTN;
