import "./Footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='redes'>
                <a href='https://www.facebook.com/facundo.rullo'>
                    <img src="/img/facebook.png" alt='Facebook'/>
                </a>
                <a href='https://twitter.com/Facundo29823843'>
                    <img src="/img/twitter.png" alt='twitter'/>
                </a>
                <a href='https://www.instagram.com/facu.rullo12/'>
                    <img src="/img/instagram.png" alt='instagram'/>
                </a>
            </div>
            <img className="logo-footer" src='/img/Logo.png' alt='org' />
            <strong className="autor">&copy; Desarrollado por Facundo Rullo</strong>
        </footer>
    );
}

export default Footer;
