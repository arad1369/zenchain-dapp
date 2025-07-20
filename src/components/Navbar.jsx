import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";

const Navbar = () => {
  return (
    <div style={styles.wrapper}>
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>ZenChain DApp</h1>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/deploy-contract" style={styles.link}>Deploy Contract</Link>
          <Link to="/deploy-token" style={styles.link}>Deploy Token</Link>
          <Link to="/deploy-nft" style={styles.link}>Deploy NFT</Link>
        </div>
      </nav>

      <div style={styles.contentWrapper}>
        {/* این قسمت محتوا رو با route ها پر می‌کنی */}
      </div>

      <footer style={styles.footer}>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" style={styles.icon}><FaTwitter /></a>
        <a href="https://t.me" target="_blank" rel="noreferrer" style={styles.icon}><FaTelegram /></a>
        <a href="https://discord.com" target="_blank" rel="noreferrer" style={styles.icon}><FaDiscord /></a>
      </footer>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "150",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    backgroundColor: "#111",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #0a9aeeff",
  },
  logo: {
    color: "#954d9cff",
    fontSize: "22px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s",
  },
  contentWrapper: {
    flexGrow: 1,
    padding: "40px",
  },
  footer: {
    backgroundColor: "#7bd4eaff",
    padding: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    borderTop: "1px solid #222",
  },
  icon: {
    fontSize: "22px",
    color: "#fff",
    transition: "color 0.3s",
  }
};

export default Navbar;