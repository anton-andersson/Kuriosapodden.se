const About = () => {
  return (
    <div className="about">
      <section id="mission">
        <h2>Varför Kuriosa?</h2>
        <p>Kuriosum (plural kuriosa), eller kuriositet, är något märkvärdigt eller egendomligt. Vid tal om samlingar används pluralformen kuriosa. Kuriosa förekommer även i ordsammansättningar.
          Ordet kuriosum kommer från latinets curiosum av curiosus. Curio'sus betyder "omsorgsfull" och "nyfiken", medan cu'ra betyder "omsorg". I det svenska språket finns det belägg för ordet kuriosum från 1800-talet.
          Kuriosa som podcast kommer behandla otaliga ämnen och känslan kan efterliknas med att kliva in i en affär med krimskrams.</p>
        <a href="https://svenska.se/tre/?sok=kuriosum">Kuriosum i svenska ordlistor</a>
        <h2>Om podden</h2>
        <p>Vår podcast strävar efter att leverera intressanta ämnen presenterade på ett underhållande sätt med den övergripande visionen att du alltid lärt dig något nytt efter ett avsnitt.
          Målbilden är alltså inte att samtliga avsnitt ska tilltala samtliga lyssnare, se det som en buffé där man får välja och vraka mellan ämnen som tycks vara intressanta!
        </p>
      </section>

      <section id="team">
        <h2>Detta är Anton och Tim!</h2>
        <div class="team-member">
          <h3>Anton Andersson</h3>
          <p>Värd och producent. Anton studerar för närvarande till civilingenjör i Lund och har tidigare jobbat i försvarsmakten.</p>
        </div>
        <div class="team-member">
          <h3>Tim Baastad</h3>
          <p>Värd och producent. Tim arbetar inom polismyndigheten och har även han en tidigare anställning inom försvarsmakten.</p>
        </div>
      </section>
      <section id="contact">
        <h2>Kontakt</h2>
        <p>Har du frågor, funderingar, avsnittsförslag, rättningar eller bara vill säga hej? </p>
        <p>Kontakta oss på twitter/x, instagram eller via mejl.</p>
        <div className="social-icons">
          <a
            href="https://x.com/kuriosapodd"
            target="_blank"
            className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/kuriosapodden/"
            target="_blank"
            className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <a href="mailto:kuriosapodd@gmail.com" style={{ fontFamily: "sans-serif" }}>kuriosapodd@gmail.com</a>
      </section>
    </div>
  );
}

export default About;