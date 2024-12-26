export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Sonu Kumar</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
           I am Currently Pursuing B.Tech from 
            <br />  IIIT ALLAHABAD
          </p>
        </div>
        <a 
  href="https://drive.google.com/file/d/18kzknygRgQtrDHDqMfbgYKlMgSVKYmnc/view?usp=sharing" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="btn btn-primary">My Resume</button>
</a>

      </div>
      <div className="hero--section--img">
        
      <img src="./img/Hero.png" alt="Hero Section" style={{ width: '500px', height: 'auto' }} />


      </div>
    </section>
  );
}
