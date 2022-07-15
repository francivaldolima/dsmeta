import logo from '../../assets/img/logo.svg';



import './styles.css';


function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://github.com/francivaldolima" target="_blank">
            github.com/francivaldolima
          </a>
        </p>
        <p>
          Desenvolvido por
          <a href="https://www.linkedin.com/in/francivaldolima" target="_blank">
            linkedin.com/in/francivaldolima
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
