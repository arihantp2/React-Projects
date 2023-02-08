import React, { useEffect, useState } from 'react'
import './CSS/Style.css'

function TempApp() {
    const [city, setCity] = useState('Pune')
    const [search, searchCity] = useState('Pune')

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a4f831d3cf0f1b52eacb5f9de2db3311`
            const response = await fetch(url)
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])

    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input type="search" className="inputField" value={search} onChange={(e) => searchCity(e.target.value)} />
                </div>

                {!city ? (
                    <p className='errorMsg'>No Data Found</p>
                ) : (
                    <>
                        <div className='info'>
                            <h3 className='location'>
                                <i class="fas fa-street-view">{search}</i>
                            </h3>
                            <h1 className='temp'>
                                {city.temp}°Cel
                            </h1>
                            <h3 className='tempmin_max'>
                                Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel
                            </h3>
                        </div>
                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
                    </>
                )
                }
            </div>
        </> 
    )
}

export default TempApp