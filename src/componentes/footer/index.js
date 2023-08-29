import React from 'react'
import "./footer.css"

function Footer() {
    const noDisponible = () => {
        alert("No Disponible")
    }
  return (
    <footer className='footer' style={{backgroundImage:"url(/img/footer.png)"}}>
        <div className="redes">
            <a href="#" onClick={noDisponible} >
                <img src="/img/facebook.png" alt="" />
            </a>
            <a target='blank' href="https://twitter.com/DamianoMassi">
                <img src="/img/twitter.png" alt="" />
            </a>
            <a target='blank' href="https://www.instagram.com/massimo.damiano0/">
                <img src="/img/instagram.png" alt="" />
            </a>

        </div>
    
        <img src="/img/logo.png" alt="" />
        <p>Desarrollado por Massimo Damiano</p>
    
    </footer>

  )
}

export default Footer