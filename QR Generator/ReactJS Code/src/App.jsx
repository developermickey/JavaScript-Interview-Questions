import React from 'react'
import QRCode from 'qrcode'

const App = () => {
  const generateQR = async text => {
    try {
      await QRCode.toDataURL(text).then(url => {

        const canvas = document.getElementById('canvas')
        QRCode.toCanvas(canvas, text, function (error) {
          if (error) console.error(error)
          console.log('success!')
        })
      })
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <div className="input-group">
        <input type="text" id="text" placeholder="Enter text or URL" />
        <button onClick={() => generateQR(document.getElementById('text').value)} id="generate">Generate</button>
      </div>
      <div id="qr-code">
        <canvas id="canvas"></canvas>
      </div>
    </div>
  )
}

export default App