import QRCode from 'qrcode'
import { useState } from 'react'

function App() {
    const [url, setUrl] = useState('')
    const [qrcode, setQrcode] = useState('')

    const GenerateQR = () => {
      QRCode.toDataURL(url, {
          errorCorrectionLevel: 'H',
          width: 800,
          margin: 0.5
      }, (error, url) => {
          if(error) {return console.error(error)}

          console.log(url)
          setQrcode(url)
      })
    }

    return (
        <div className="App">
            <h1>QR-code Generator</h1>
            <textarea
                placeholder="Type your text/link here..."
                className="textarea"
                contentEditable
                value={url}
                onChange={(event) => setUrl(event.target.value)}
            />
            <button onClick={GenerateQR}>Go!</button>
            {
                qrcode &&
                <>
                    <img src={qrcode} />
                </>
            }
        </div>
    )
}

export default App
