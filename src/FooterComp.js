import MediaQuery, { useMediaQuery } from "react-responsive";

const FooterComp = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div className="footer">
      <div className="footer-content" style={isMobile ? {display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "300px", alignItems: "center"}: {maxWidth:"1200px"}}>
        <div className="social-icons">
          <a
            href="https://open.spotify.com/show/1FHMXyjuTJDPNwWgAh4MvM"
            target="_blank"
            className="social-icon"
          >
            <i className="fab fa-spotify"></i>
          </a>
          <a
            href="https://feeds.acast.com/public/shows/66b63f9d5f2de2802ac88892"
            target="_blank"
            className="social-icon"
          >
            <i className="fa-solid fa-rss"></i>
          </a>
          <a
            href="https://discord.gg/52aR2yFa5d"
            target="_blank"
            className="social-icon"
          >
            <i className="fab fa-discord"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="social-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            className="social-icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/anton-andersson/Kuriosapodden.se"
            target="_blank"
            className="social-icon"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <p>© 2024 Kuriosa. Alla rättigheter förbehållna.</p>
      </div>
    </div>
  );
};

export default FooterComp;
