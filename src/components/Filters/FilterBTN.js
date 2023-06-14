import React from 'react';

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
    return (
        <div>
            {/* Eliminamos el elemento que seleccionaba el boton */}
            <style jsx>
                {`
                    .x: checked + label {
                        backgraound-color: #0b5ed07;
                    }
                    input[type='radio'] {
                        display: none;
                    }
                `}
            </style>
            <div class='form-check'>
                <input
                    onClick={() => {
                        setPageNumber(1);
                        task(items);
                    }}
                    class='form-check-input x'
                    type='radio'
                    name={name}
                    id={`${name}-${index}`}
                />
                <label
                    class='btn btn-outline-primary'
                    for={`${name}-${index}`}>
                    {items}
                </label>
            </div>
        </div>
    );
};

export default FilterBTN;
