import Image from "next/image"
import footerimg from "../image/footer-bg.jpg"
import "../style/footer.css";
function Contact (){
    return(
      <footer>
      <div className="footer-container">
          <Image 
              src={footerimg} 
              alt="footer" 
              className="footer-image" 
          />
          <div className="footer-copyright">
              <p>Copyright 2024 All rights Reserved</p>
          </div>
  
          <div className="footer-social">
              <h3 className="footer-follow-heading">Follow Us</h3>
              <br />
              <a href="https://www.facebook.com" className="footer-link">Facebook</a>
              <br />
              <a href="mailto:example@gmail.com" className="footer-link">Gmail</a>
          </div>
      </div>
  </footer>
  
    )
}

export default Contact