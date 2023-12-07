import React, { useState } from 'react'
import './App.css'
import { CM, KE, NG } from 'country-flag-icons/react/3x2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const WelcomeScreen = () => {
    return (
        <div>
            <h2>Welcome to VariaLingua!</h2>
            <p>
                Explore the nuances of Nigerian, Kenyan, and Cameroonian
                Englishes!
            </p>
        </div>
    )
}

const HistorySection = ({ country }) => {
    return (
        <div>
            <h2>{country} History</h2>
            <p>Placeholder content for the history of {country}.</p>
        </div>
    )
}

const CultureSection = ({ country }) => {
    return (
        <div>
            <h2>{country} Culture</h2>
            <p>Placeholder content for the culture of {country}.</p>
        </div>
    )
}

const LinguisticSection = ({ country }) => {
    return (
        <div>
            <h2>{country} Linguistics</h2>
            <p>Placeholder content for the linguistic aspects of {country}.</p>
        </div>
    )
}

const AboutVariaLingua = () => {
    return (
        <div className="about-container neumorphic-container">
            <h2>About VariaLingua</h2>
            <p>
                VariaLingua is a platform dedicated to exploring the diverse
                English variations found in Nigeria, Kenya, and Cameroon.
                Discover the historical, cultural, and linguistic aspects of
                these fascinating Englishes!
            </p>
        </div>
    )
}

function App() {
    const [selectedCountry, setSelectedCountry] = useState('Welcome')
    const [showOptions, setShowOptions] = useState(false)
    const [showAbout, setShowAbout] = useState(false)

    const handleCountrySelect = (country) => {
        if (selectedCountry === country) {
            setSelectedCountry('Welcome')
            setShowOptions(false)
        } else {
            setSelectedCountry(country)
            setShowOptions(true)
        }
    }

    const toggleAboutVariaLingua = () => {
        setShowAbout(!showAbout)
    }

    const renderOptions = () => {
        return (
            <div>
                <HistorySection country={selectedCountry} />
                <CultureSection country={selectedCountry} />
                <LinguisticSection country={selectedCountry} />
            </div>
        )
    }

    return (
        <div className="App">
            <header className="App-header neumorphic-container">
                <img src="logo512.png" className="App-logo" alt="logo" />
                <h1>VariaLingua</h1>
            </header>
            <div className="container">
                <div className="main-container neumorphic-container">
                    {selectedCountry === 'Welcome' && <WelcomeScreen />}
                    {selectedCountry !== 'Welcome' && !showOptions && (
                        <div>
                            <HistorySection country={selectedCountry} />
                        </div>
                    )}
                    {showOptions && renderOptions()}
                </div>
                <div className="right-container">
                    <div className="dropdown-container neumorphic-container">
                        <div className="dropdown">
                            <h2>
                                Click on a country to view its language profile!
                            </h2>
                            <div
                                className="drop-option"
                                onClick={() => handleCountrySelect('Nigeria')}
                            >
                                <NG title="Nigeria" className="flag-icon" />
                                Nigeria
                            </div>
                            <div
                                className="drop-option"
                                onClick={() => handleCountrySelect('Kenya')}
                            >
                                <KE title="Kenya" className="flag-icon" />
                                Kenya
                            </div>
                            <div
                                className="drop-option"
                                onClick={() => handleCountrySelect('Cameroon')}
                            >
                                <CM title="Cameroon" className="flag-icon" />
                                Cameroon
                            </div>
                        </div>
                    </div>

                    {showAbout && <AboutVariaLingua />}

                    <div className="additional-container">
                        <div className="round-buttons">
                            <div className="round-button neumorphic-container">
                                <FontAwesomeIcon
                                    icon={['fas', 'book']}
                                    className="icon"
                                />
                                <span className="button-text">
                                    Sources View
                                </span>
                            </div>
                            <div
                                className="round-button neumorphic-container"
                                onClick={() => toggleAboutVariaLingua()}
                            >
                                <FontAwesomeIcon
                                    icon={['fas', 'question']}
                                    className="icon"
                                />
                                <span className="button-text">
                                    What is VariaLingua?
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
