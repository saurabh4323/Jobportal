import React, { useRef } from 'react';
import './SearchBar.css';
import 'remixicon/fonts/remixicon.css'
import { Form, FormGroup } from 'react-bootstrap';
import { IoSearchCircleSharp } from 'react-icons/io5';

const Searchbar = () => {
    const locationRef = useRef('');
    const jobTypeRef = useRef(0);
    const keywordRef = useRef(0);

    const searchHandler = () => {
        const location = locationRef.current.value;
        const jobType = jobTypeRef.current.value;
        const keyword = keywordRef.current.value;

        if (location === '' || jobType === '' || keyword === '') {
            return alert('All Fields are Required!!!');
        }
    };

    return (
        <div className='search-bar-container'>
            <Form className='d-flex gap-4 align-items-center'>
                <FormGroup className='d-flex gap-3'>
                    <span className='logo'>
                        <i className='ri-map-pin-line'></i>
                    </span>
                    <div className='input-container'>
                        <h6>Location</h6>
                        <input type='text' placeholder='Enter location' ref={locationRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3'>
                    <span className='logo'>
                        <i className='ri-pin-distance-line'></i>
                    </span>
                    <div className='input-container'>
                        <h6>Job Type</h6>
                        <select ref={jobTypeRef} className='form-select'>
                            <option value=''>Select job type</option>
                            <option value='full-time'>Full Time</option>
                            <option value='intern'>Intern</option>
                            <option value='hybrid'>Hybrid</option>
                        </select>
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3'>
                    <span className='logo'>
                    <i class="ri-pencil-line"></i>
                    </span>
                    <div className='input-container'>
                        <h6>Keyword</h6>
                        <input type='text' placeholder='Keywords' ref={keywordRef} />
                    </div>
                    <div className='search-button'>
                        <IoSearchCircleSharp className='search-icon' onClick={searchHandler} />
                    </div>
                </FormGroup>
            </Form>
        </div>
    );
};

export default Searchbar;
