import React from 'react'; import ConnectWallet from './components/ConnectWallet'; import DeployHelloContract from './components/DeployHelloContract'; import './style.css'; import nftBanner from './nft.jpg'; // ← مسیر درست تصویر
function App() {
  return (<div className="app-container">
    {/* بنر NFT */}
    <img src={nftBanner} alt="NFT Banner" style={{ width: '100%', maxHeight: 'auto', objectFit: 'cover' }} />
    <h1>zenchain deploy</h1>
    <ConnectWallet />
    <DeployHelloContract />
    {/* فوتر */}
    <footer className="footer">
      <a href="https://discord.com/@Arad_013" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/ios-filled/24/00ff00/discord-logo.png" alt="Discord" />
      </a>
      <a href="https://t.me/Arad_013" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/ios-filled/24/00ff00/telegram-app.png" alt="Telegram" />
      </a>
      <a href="https://twitter.com/cryptoearningir" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/ios-filled/24/00ff00/twitter.png" alt="Twitter" />
      </a>
    </footer>
  </div>);
}
export default App;