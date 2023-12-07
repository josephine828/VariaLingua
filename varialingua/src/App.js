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

const InitProfile = ({ country }) => {
    return (
        <div className="init-profile">
            {country === 'Welcome' && <WelcomeScreen />}
            <h2>Initial Profile</h2>
            <p>Placeholder content for {country}'s initial profile.</p>
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

const ViewSources = () => {
    return (
        <div className="about-container neumorphic-container">
            <h2>View Sources</h2>
            <p>
                This is a list of the resources used in this application! 
                References:
                Will be available soon!
                Videos:
                Will be available soon!
            </p>
        </div>
    )
}

function App() {
    const [selectedCountry, setSelectedCountry] = useState('Welcome')
    const [selectedSection, setSelectedSection] = useState('')
    const [showAbout, setShowAbout] = useState(false)
    const [showViewSources, setShowViewSources] = useState(false)
    const [showInitProfile, setShowInitProfile] = useState(true)
    const [showHistory, setShowHistory] = useState(false)
    const [showCulture, setShowCulture] = useState(false)
    const [showLinguistic, setShowLinguistic] = useState(false)

    const handleCountrySelect = (country) => {
        if (selectedCountry === country) {
            setSelectedCountry('Welcome')
        } else {
            setSelectedCountry(country)
        }
    }

    const toggleAboutVariaLingua = () => {
        setShowAbout(!showAbout)
    }

    const toggleViewSources = () => {
        setShowViewSources(!showViewSources)
    }

    const showHistorySection = () => {
        if (showHistory) {
            setShowInitProfile(true)
            setShowHistory(false)
            setSelectedSection('')
        } else {
            setShowInitProfile(false)
            setShowHistory(true)
            setShowCulture(false)
            setShowLinguistic(false)
            setSelectedSection('History')
        }
    }

    const showCultureSection = () => {
        if (showCulture) {
            setShowInitProfile(true)
            setShowCulture(false)
            setSelectedSection('')
        } else {
            setShowInitProfile(false)
            setShowHistory(false)
            setShowCulture(true)
            setShowLinguistic(false)
            setSelectedSection('Culture')
        }
    }

    const showLinguisticSection = () => {
        if (showLinguistic) {
            setShowInitProfile(true)
            setShowLinguistic(false)
            setSelectedSection('')
        } else {
            setShowInitProfile(false)
            setShowHistory(false)
            setShowCulture(false)
            setShowLinguistic(true)
            setSelectedSection('Linguistics')
        }
    }

    return (
        <div className="App">
            <header className="App-header neumorphic-container">
                <img src="logo512.png" className="App-logo" alt="logo" />
                <h1>VariaLingua</h1>
            </header>
            <div className="container">
                <div className="left-container">
                    <div className="section-select-container">
                        <div
                            className={`section-button neumorphic-container ${selectedSection === "History" ? "selected-section" : ""}`}
                            onClick={() => showHistorySection()}
                        >
                            <FontAwesomeIcon
                                icon={['fas', 'monument']}
                                className="icon"
                            />
                            History
                        </div>
                        <div
                            className={`section-button neumorphic-container ${selectedSection === "Culture" ? "selected-section" : ""}`}
                            onClick={() => showCultureSection()}
                        >
                            <FontAwesomeIcon
                                icon={['fas', 'globe']}
                                className="icon"
                            />
                            Culture
                        </div>
                        <div
                            className={`section-button neumorphic-container ${selectedSection === "Linguistics" ? "selected-section" : ""}`}
                            onClick={() => showLinguisticSection()}
                        >
                            <FontAwesomeIcon
                                icon={['fas', 'language']}
                                className="icon"
                            />
                            Linguistics
                        </div>
                    </div>
                    <div className="main-container neumorphic-container">
                        {showInitProfile && (
                            <InitProfile country={selectedCountry} />
                        )}
                        {showHistory && (
                            <HistorySection country={selectedCountry} />
                        )}
                        {showCulture && (
                            <CultureSection country={selectedCountry} />
                        )}
                        {showLinguistic && (
                            <LinguisticSection country={selectedCountry} />
                        )}
                    </div>
                </div>
                <div className="right-container">
                    <div className="dropdown-container neumorphic-container">
                        <div className="dropdown">
                            <h2>
                                Click on a country to view its language profile!
                            </h2>
                            <div
                                className={`drop-option ${selectedCountry === 'Nigeria' ? 'selected-country' : ''}`}
                                onClick={() => handleCountrySelect('Nigeria')}
                            >
                                <NG title="Nigeria" className="flag-icon" />
                                Nigeria
                            </div>
                            <div
                                className={`drop-option ${selectedCountry === 'Kenya' ? 'selected-country' : ''}`}
                                onClick={() => handleCountrySelect('Kenya')}
                            >
                                <KE title="Kenya" className="flag-icon" />
                                Kenya
                            </div>
                            <div
                                className={`drop-option ${selectedCountry === 'Cameroon' ? 'selected-country' : ''}`}
                                onClick={() => handleCountrySelect('Cameroon')}
                            >
                                <CM title="Cameroon" className="flag-icon" />
                                Cameroon
                            </div>
                        </div>
                    </div>

                    {showAbout && <AboutVariaLingua />}

{showViewSources && <ViewSources />}

                    <div className="additional-container">
                        <div className="round-buttons">
                            <div className="round-button neumorphic-container"onClick={() => toggleViewSources()}>
                                <FontAwesomeIcon
                                    icon={['fas', 'book']}
                                    className="icon"
                                />
                                <span className="button-text">
                                    View Sources
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
