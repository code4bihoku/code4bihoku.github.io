import './App.css'
import bysaLogo from './assets/by-sa.svg'
import c4bLogo from '/c4b.svg'

function App() {
 
  return (
    <>
      <div>
        <img src={c4bLogo} className="logo" alt="Code for Bihoku logo" />
      </div>
      <h1>Code for Bihoku</h1>
      <p className="read-the-docs">オープンデータ・テクノロジーで街づくり。</p>
      <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja" target="_blank">
        <img src={bysaLogo} className="logo2" alt="Code for Bihoku logo" />
      </a>
    </>
  )
}

export default App
