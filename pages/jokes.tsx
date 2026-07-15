import Head from 'next/head'
import { useState } from 'react'

interface Joke {
  id: number
  type: string
  setup: string
  delivery: string
}

export default function JokeGenerator() {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [jokeCount, setJokeCount] = useState(0)

  const fetchJoke = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke')
      if (!response.ok) throw new Error('Failed to fetch joke')
      const data = await response.json()
      setJoke(data)
      setJokeCount(jokeCount + 1)
    } catch (err) {
      setError('Could not fetch joke. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    if (!joke) return
    const fullJoke = `${joke.setup}\n${joke.delivery}`
    navigator.clipboard.writeText(fullJoke)
    alert('Joke copied to clipboard!')
  }

  return (
    <>
      <Head>
        <title>Random Joke Generator</title>
        <meta name="description" content="Generate random jokes from an external API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .container {
          background: white;
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          padding: 40px;
          max-width: 600px;
          width: 100%;
        }

        h1 {
          color: #333;
          text-align: center;
          margin-bottom: 10px;
          font-size: 2.5rem;
        }

        .subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 40px;
          font-size: 0.95rem;
        }

        .joke-display {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 10px;
          margin-bottom: 30px;
          min-height: 150px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }

        .setup {
          font-size: 1.2rem;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .delivery {
          font-size: 1.3rem;
          font-weight: bold;
          color: #ffd700;
        }

        .empty-state {
          color: #999;
          font-style: italic;
          padding: 20px;
        }

        .error {
          background: #ffe0e0;
          color: #d00;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          text-align: center;
        }

        .buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        button {
          padding: 12px 30px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          flex: 1;
          min-width: 200px;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .btn-secondary {
          background: #f0f0f0;
          color: #333;
          border: 2px solid #667eea;
        }

        .btn-secondary:hover {
          background: #667eea;
          color: white;
        }

        .stats {
          text-align: center;
          margin-top: 30px;
          padding-top: 30px;
          border-top: 2px solid #eee;
          color: #666;
        }

        .stats p {
          font-size: 0.95rem;
          margin: 10px 0;
        }

        .badge {
          display: inline-block;
          background: #667eea;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          margin-top: 5px;
        }

        @media (max-width: 600px) {
          .container {
            padding: 25px;
          }

          h1 {
            font-size: 2rem;
          }

          .buttons {
            flex-direction: column;
          }

          .btn-primary {
            min-width: 100%;
          }

          .setup {
            font-size: 1rem;
          }

          .delivery {
            font-size: 1.1rem;
          }
        }

        .loading {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="container">
        <h1>😂 Joke Generator</h1>
        <p className="subtitle">Get a random laugh with every click!</p>

        {error && <div className="error">{error}</div>}

        <div className="joke-display">
          {loading ? (
            <div style={{ textAlign: 'center' }}>
              <div className="loading" style={{ margin: '0 auto' }}></div>
              <p style={{ marginTop: '15px' }}>Loading a funny joke...</p>
            </div>
          ) : joke ? (
            <>
              <div className="setup">{joke.setup}</div>
              <div className="delivery">{joke.delivery}</div>
            </>
          ) : (
            <div className="empty-state">Click the button to generate a joke!</div>
          )}
        </div>

        <div className="buttons">
          <button
            className="btn-primary"
            onClick={fetchJoke}
            disabled={loading}
          >
            {loading ? 'Loading...' : '🎲 Get Joke'}
          </button>
          {joke && (
            <button className="btn-secondary" onClick={copyToClipboard}>
              📋 Copy
            </button>
          )}
        </div>

        <div className="stats">
          <p>Jokes generated: <span className="badge">{jokeCount}</span></p>
          {joke && (
            <p style={{ fontSize: '0.85rem', marginTop: '10px', color: '#999' }}>
              Type: {joke.type}
            </p>
          )}
        </div>
      </div>
    </>
  )
}
