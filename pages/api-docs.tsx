import Head from 'next/head'

export default function ApiDocs() {
  return (
    <>
      <Head>
        <title>API Documentation - Free Fire Shop</title>
        <meta name="description" content="Documentation des APIs utilisées" />
      </Head>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #0F1419;
          color: #fff;
          line-height: 1.6;
          padding: 40px 20px;
        }

        .doc-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .doc-header {
          text-align: center;
          margin-bottom: 50px;
          padding-bottom: 30px;
          border-bottom: 2px solid #FF6B35;
        }

        .doc-header h1 {
          font-size: 2.5rem;
          color: #FF6B35;
          margin-bottom: 10px;
        }

        .api-section {
          margin-bottom: 50px;
          background: #1A1F2E;
          padding: 30px;
          border-radius: 10px;
          border-left: 4px solid #FF6B35;
        }

        .api-section h2 {
          color: #FF6B35;
          margin-bottom: 20px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          background: #0F1419;
          border-radius: 8px;
        }

        th {
          background: #667eea;
          padding: 15px;
          text-align: left;
          color: white;
        }

        td {
          padding: 12px 15px;
          border-bottom: 1px solid #1A1F2E;
          color: #CCC;
        }
      `}</style>

      <div className="doc-container">
        <div className="doc-header">
          <h1>📚 API Documentation</h1>
          <p>All external APIs used</p>
        </div>

        <div className="api-section">
          <h2>😂 Official Joke API</h2>
          <p>Provides random jokes in English</p>
          <p style={{ marginTop: '10px' }}><strong>Base URL:</strong></p>
          <p style={{ color: '#00B894' }}>https://official-joke-api.appspot.com</p>
          
          <h3 style={{ marginTop: '20px', color: '#667eea' }}>Available Endpoints</h3>
          <table>
            <thead>
              <tr>
                <th>Endpoint</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>/random_joke</td>
                <td>Returns a random joke</td>
              </tr>
              <tr>
                <td>/jokes/programming/random</td>
                <td>Returns a programming joke</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="api-section">
          <h2>🖼️ Meme API</h2>
          <p>Fetches the best memes from Reddit</p>
          <p style={{ marginTop: '10px' }}><strong>Base URL:</strong></p>
          <p style={{ color: '#00B894' }}>https://meme-api.com</p>
        </div>

        <div className="api-section">
          <h2>💡 Quotable API</h2>
          <p>Provides inspirational quotes from famous people</p>
          <p style={{ marginTop: '10px' }}><strong>Base URL:</strong></p>
          <p style={{ color: '#00B894' }}>https://api.quotable.io</p>
        </div>
      </div>
    </>
  )
}
