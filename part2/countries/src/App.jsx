import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [countries, setCountries] = useState([])
  const [countriesNames, setCountriesNames] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
        setCountriesNames(response.data.map(country => country.name.common))
      })
  }, [])

  const handleInputChange = (event) => {
    event.preventDefault()
    let search = event.target.value
    setNewSearch(search)
    setCountriesToShow(countriesNames.filter(country => country.toLowerCase().includes(search.toLowerCase())))
  }

  const handleCountriesToShow = () => {
    if (countriesToShow.length > 10) return ["Too many matches, specify another filter"]
    return countriesToShow
  }

  const showCountryInfo = () => {
    let country = countries.find(country => country.name.common === countriesToShow[0])
    console.log(country)
    return <div>
      <h1>{country.name.common}</h1>
        Capital {country.capital[0]} <br/>
        Area {country.area}
      <h2>Languages</h2>
      <ul>
        {console.log(Object.values(country.languages))}
        {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  }

  const showButton = (country) => {
    if(countriesToShow.length <= 10) {
      return <button onClick={() => setCountriesToShow([country])}>
        Show
      </button>
    }
  }

  return (
    <>
      <form>
        <label>find countries &nbsp;
          <input type="text" value={newSearch} onChange={handleInputChange}/>
        </label>
      </form>
      {countriesToShow.length != 1 ?
        <ul style={{listStyleType: 'none', padding: 0}}>
          {handleCountriesToShow().map(country => <li key={country}>{country}&nbsp;{showButton(country)}</li>)}
        </ul>
      :
        <div>
          {showCountryInfo()}
        </div>
      }
    </>
  )
}

export default App
