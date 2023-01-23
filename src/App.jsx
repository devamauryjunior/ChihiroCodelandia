import { useState } from 'react'
import './styles/App.css'
import Logo from './assets/logo.svg'
import facebook from './assets/socialMedia/facebook.svg'
import instagram from './assets/socialMedia/instagram.svg'
import youtube from './assets/socialMedia/youtube.svg'
import twitter from './assets/socialMedia/twitter.svg'
import Play from './assets/play.svg'
import IconButton from './components/IconButton'
import Chihiro from './assets/chihiro.svg'

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
      <div style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "left",
      }}>
        <img className='imageChihiro' src={Chihiro} alt="Chihiro" style={{width: "90%"}} />
        <div>
          <div style={{
            textAlign: "left",
            color: "#FFF",
            width: "100%"
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
              marginBottom: "5rem"
            }}>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
          </div>
          <button className='watch' style={{
            width: "70%",
            padding: "1rem 3.3rem 1rem 3rem",
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            textTransform: "uppercase",
            background: "#658E76",
            border: "none",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "1.6rem",
            color: "#FFF"
          }}>
            <img src={Play} alt="Play button" style={{width: "1.5rem"}}/>
            ASSISTIR AGORA
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
