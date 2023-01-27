import { useState } from 'react'
import './styles/App.css'
import Logo from './assets/logo.svg'
import facebook from './assets/socialMedia/facebook.svg'
import instagram from './assets/socialMedia/instagram.svg'
import youtube from './assets/socialMedia/youtube.svg'
import twitter from './assets/socialMedia/twitter.svg'
import IconButton from './components/IconButton/IconButton.jsx'
import Chihiro from './assets/chihiro.svg'
import PLayButton from './components/PLayButton'
import Play from './assets/play.svg'

function App() {

  const Logos = [
    {name: facebook, link: "https://www.facebook.com/"},
    {name: instagram, link: "https://www.instagram.com/"},
    {name: twitter, link: "https://twitter.com/"},
    {name: youtube, link: "https://www.youtube.com/"}
  ]

  return (
    <div 
      className="App"
      style={{
        height: "100%",
        padding: "1.4rem 2.5rem 2.6rem 2.5rem",
      }}  
    >
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <img src={Logo} alt="Logo" />
        <ul style={{
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px"
        }}>
          {
            Logos.map((logo, idx) => <IconButton key={idx} icon={logo.name} link={logo.link}/>)
          }
        </ul>
      </nav>
      <div className='container'>
        <img className='imageChihiro' src={Chihiro} alt="Chihiro" />
        <div style={{width: "100%"}}>
          <div className='ct' style={{
            textAlign: "left",
            color: "#FFF",
          }}>
            <h2 style={{
              fontWeight: "700",
              fontSize: "1.8rem",
              lineHeight: "2.7rem",
              letterSpacing: "0.003rem",
              marginBottom: "0.6rem"
            }}>HAYAO MIYAZAKI</h2>
            <h1 style={{
              fontWeight: "900",
              fontSize: "5.2rem",
              width: "100%",
              marginBottom: "1.6rem"
            }}>A VIAGEM DE CHIHIRO</h1>
            <p style={{
              fontWeight: "400",
              fontSize: "1.4rem",
              paddingRight: "1.8rem",
              marginBottom: "1.5rem"
            }}>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
          </div>
          <div className='ct-1'>
            <PLayButton image={Play} buttonText="Assistir Agora"/>
            <PLayButton buttonText="Assistir Agora"/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
