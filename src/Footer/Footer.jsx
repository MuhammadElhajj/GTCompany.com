import "./Footer.css";
import LogoPhoto from '../images/GT11.png'

function Footer(openSide) {


  return (
    <footer className="Footer">
   

        <img className="Footer__Logo__Photo" src={LogoPhoto} alt="Logo" />
        <span className="Footer-Span">Created By Muhammad ElHajj</span>

  
    </footer>
  );
}

export default Footer;
