import './App.css'
import bysaLogo from './assets/by-sa.svg'
import githubLogo from './assets/github-mark-white.svg'
import youtubeLogo from './assets/YouTube_light_icon_2017.svg'
import c4bLogo from '/c4b.svg'

function App() {
 
  return (
    <>
      <div>
        <img src={c4bLogo} className="logo" alt="Code for Bihoku logo" />
      </div>
      <h1>Code for Bihoku</h1>
      <p className="read-the-docs">オープンデータ・テクノロジーで広島県備北地域の街づくり。</p>
      <a href="https://github.com/code4bihoku" target="_blank">
       <img src={githubLogo} className="logo2" alt="github logo" />
      </a>
      <a href="https://www.youtube.com/@CodeForBihoku-g7p" target="_blank">
        <img src={youtubeLogo} className="logo2" alt="YouTube logo" />
      </a>
      <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja" target="_blank">
        <img src={bysaLogo} className="logo2" alt="CC by SA 4.0 logo" />
      </a>
    </>
  )
}

export default App
