import './App.css';
import { useState } from 'react';
import logo from './assets/logo.svg'

const api = {
  key: "d91e5af2517572deed4392e96dd7c09a",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState({})

  const handleGetWeatherData = async (e) => {
    e.preventDefault()
    await fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result)
    })
    setSearch("")
  }


  return (
    <div className=" min-h-screen flex text-blue-600 justify-center items-center">
      <div>
        <div>
        <div className=' flex justify-center font-bold text-4xl mb-10'>
            Weather App
          </div>
          <div>
            <img src={logo} alt='svg' />
          </div>
         
        </div>
        <div>
          <form className='flex flex-row justify-center mt-6'>
            <div  className='mr-2'>
          <input 
            type='text' 
            placeholder='Enter city/town...' 
            value={search}
            className='border p-2 border-blue-200 rounded-md text-blue-500 outline-none'
            onChange={(e) => setSearch(e.target.value)}
            />
            </div>
            <div className='ml-2 bg-blue-600 text-white flex justify-center items-center rounded-md py-2 px-8'>
              <button data-testid="search" onClick={handleGetWeatherData}>Search</button>
            </div>
          </form>
        </div>

        <div className=' bg-blue-600 text-white p-8 flex flex-col justify-center items-center rounded-md mt-6'>
          {typeof weather.main != "undefined" ? 
          <>
             <div>
          <p className=' text-xl font-bold mb-4 underline text-blue-100'>{weather?.name}</p>
        </div>

        <div>
          <p>{weather?.main?.temp}°C</p>
        </div>

        <div className=' flex flex-col justify-center items-center'>
              <p>{weather?.weather[0]?.main}</p>
          <p>{weather?.weather[0]?.description}</p>
        </div>
          </>
          : 'No fetched data yet !!'}
        </div>

       

      </div>
    </div>
  );
}

export default App;
