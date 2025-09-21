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

  const downloadQR = () => {
    const canvas = document.getElementById('canvas')
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')
    let downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = 'qr_code.png'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
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

      <button onClick={() => downloadQR()} id="download">Download</button>
    </div>
  )
}

export default App