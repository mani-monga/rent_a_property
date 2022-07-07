import React, { useState } from 'react';
import './Search.css'
import Sampledata from './Sample';
import Card from '../Card/Card';

// Creating a list data for unique type

const uniquelist = [...new Set(Sampledata.map((item) => {
    return item.type;
})),"All"]

// Creating a list data for unique country

const uniqueCountry = [...new Set(Sampledata.map((item) => {
    return item.country;
})),"All"]
// this will put today's date into the variable curr

const curr = new Date();

function Search() {

    // Use state for updating data 

    const [data, setdata] = useState(Sampledata)
    const [value, setvalue] = useState(Sampledata[0].type);
    const [country, setcountry] = useState(Sampledata[0].country);
    const [max, setmax] = useState(2500);
    const [date, setdate] = useState(
        {
            month: parseInt(curr.getMonth() + 1),
            year: parseInt(curr.getFullYear()),
        }
    );

    // onChange Handler For Date Picker

    const onchangeHandler = e => {
        var val = e.target.value;
        setdate({
            month: parseInt(val.slice(5, 7)),
            year: parseInt(val.slice(0, 4)),
        }
        )
    }

    // Checking date availability for filtering

    const checkdate = ({ month, year }) => {
        if (date.month >= month && date.year >= year)
            return 1;
        else return 0;
    }

    // filtering of data

    const onClickSearch = () => {
        if (!(country && value)) {
            alert("Enter All The Search fields");
            return false;
        }
        else {
            setdata(
                Sampledata.filter((elem) => {
                    return (country==="All"?1:elem.country === country) 
                    && elem.Price <= max 
                    && (value === "All"?1:elem.type === value)
                    && checkdate(elem.AvailableFrom);
                })
            )
            if (data.length === 0) {
                alert("No Matching Result");
            }
        }

    }

    // Range Slider For Budget Picking 

    const RangeSlider = () => {
        if (document.getElementById('rangetext').style.display === 'block') {
            document.getElementById('rangetext').style.display = 'none';
            document.getElementById('text').style.display = 'block';
        }
        else {
            document.getElementById('rangetext').style.display = 'block';
            document.getElementById('text').style.display = 'none';
        }
    }

    return (
        <>
            <div className='SearchContainer'>
                <div className="SearchHead">
                    <h1>Search properties to rent</h1>
                    <select id='searchoption' value="" onChange={e => e.target.value}>
                        <option name="Search" id="">Search With Serch Bar</option>
                    </select>
                </div>
                <div className="SearchFilter">
                    <div className="filter">
                        <li>
                            <p>Location</p>
                            <select
                                value={country || ''}
                                onChange={e => { setcountry(e.target.value) }}>

                                {
                                    uniqueCountry.map((elem, index) => {
                                        return (
                                            <option
                                                name="Search"
                                                key={index}
                                                value={elem}>
                                                {elem}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </li>
                        <li>
                            <p>When</p>
                            <input
                                type="month"
                                min={(date.year +
                                    (date.month < 10 ? "-0" : "-")
                                    + date.month)}
                                onChange={onchangeHandler}
                                placeholder='Select Move-in Date'
                            />
                        </li>
                        <li>
                            <p id='money'>Price<svg onClick={RangeSlider} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path></svg></p>
                            <span id='text' >500$-{max}$</span>
                            <span id='rangetext'><input
                                id='range'
                                type="range"
                                min='500'
                                max='5000'
                                value={max || ''}
                                onChange={e => { setmax(e.target.value) }}
                            />{max}</span>
                        </li>
                        <li>
                            <p>Property type</p>
                            <select
                                value={value || ''}
                                onChange={e => { setvalue(e.target.value) }}>
                                {
                                    uniquelist.map((elem, index) => {
                                        return (
                                            <option
                                                name="Search"
                                                key={index}
                                                value={elem}>
                                                {elem}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </li>
                        <button
                            onClick={onClickSearch}
                        >Search</button>

                    </div>
                </div>
            </div>
            <div className="container">
                
                {
                    data.map(elem => {
                        return (
                            <Card
                                key={elem.id}
                                Name={elem.firstname + "  " + elem.lastname}
                                Cost={elem.Price}
                                Address={elem.city + "  , " + elem.country + "  , " + elem.countryCode}
                                Beds={elem.bedroom}
                                Bathroom={elem.bathroom}
                                Area={elem.Area}
                                img={elem.image}
                            />
                        )
                    })
                }

            </div>


        </>
    )
}

export default Search