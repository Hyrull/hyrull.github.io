import './Footer.scss'
import githubLogo from './../../assets/img/github.svg'
import linkedinLogo from './../../assets/img/linkedin.svg'

function Footer() {
  return (
    <footer>
      <h2>Site créé par Xavier Léonard</h2>
      <div className='networks'>
        <a href='https://github.com/hyrull'><img src={githubLogo} alt='Logo de GitHub'/></a>
        <a href='https://www.linkedin.com/in/xavier-leonard-35a6ab19a/'><img src={linkedinLogo} alt='Logo de LinkedIn'/></a>
      </div>
    </footer>
  )
}

export default Footer