import React, { useState } from 'react'

export default function Navbar(props){

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-1">
        <div className="container-fluid">
            <div className='col-sm-2 text-center'>
                <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" alt="page icon"  width={'100px'}/>
            </div>
            <div className='col-sm-8 '>
                <form 
                    onSubmit={ e => {
                    e.preventDefault();
                    props.setQuery(props.search);
                    }}
                >
                    <div className="form-group col-md-6 d-flex justify-content-start">
                        <input type="search" onChange={ e => props.setSearch(e.target.value)} placeholder='Enter a city' className='form-control' aria-label='Search'/>
                        <input type="submit" value='Search' className="btn btn-outline-success" />
                    </div>                    
                </form>
                
                    
            </div>
            <div className='col-sm-2'>
                <button className='btn btn-light w-100'>
                    <span>°C</span>
                    /
                    <span>°F</span>
                </button>
            </div>
        </div>
</nav>
    )
}