import React from 'react';
import FilterBTN from '../FilterBTN';

const Gender = ({ setPageNumber, setGender }) => {
    let genders = ['Female', 'Male', 'Genderless', 'Unknown'];
    return (
        <div className='accordion-item'>
            <h2
                className='accordion-header'
                id='headingOne'>
                <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'>
                    Gender
                </button>
            </h2>
            <div
                id='collapseThree'
                className='accordion-collapse collapse'
                aria-labelledby='headingThree'
                data-bs-parent='#accordionExample'>
                <div className='accordion-body  d-flex flex-wrap gap-3'>
                    {genders.map((items, index) => (
                        <FilterBTN
                            task={setGender}
                            setPageNumber={setPageNumber}
                            key={index}
                            name='gender'
                            index={index}
                            items={items}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gender;
