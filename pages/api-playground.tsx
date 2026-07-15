import Head from 'next/head'
import { useState } from 'react'

interface JokeData {
  setup: string
  delivery: string
  id: number
  type: string
}

interface MemeData {
  title: string
  url: string
  author: string
  subreddit: string
}

export default function ApiPlayground() {
  const [activeTab, setActiveTab] = useState<'joke' | 'meme' | 'quote'>('joke')
  const [joke, setJoke] = useState<JokeData | null>(null)
  const [meme, setMeme] = useState<MemeData | null>(null)
  const [quote, setQuote] = useState<{ text: string; author: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchJoke = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke')
      const data = await response.json()
      setJoke(data)
    } catch (err) {
      setError('Failed to fetch joke')
    } finally {
      setLoading(false)
    }
  }

  const fetchMeme = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('https://meme-api.com/gimme')
      const data = await response.json()
      setMeme(data)
    } catch (err) {
      setError('Failed to fetch meme')
    } finally {
      setLoading(false)
    }
  }

  const fetchQuote = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('https://api.quotable.io/random')
      const data = await response.json()
      setQuote({ text: data.content, author: data.author })
    } catch (err) {
      setError('Failed to fetch quote')
    } finally {
      setLoading(false)
    }
  }

  const handleTabChange = (tab: typeof activeTab) => {
    setActiveTab(tab)
    setError('')
  }

  return (
    <>
      <Head>
        <title>API Playground - Joke, Meme & Quote Generator</title>
        <meta name="description" content="Random joke, meme and quote generator using external APIs" />
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
          padding: 20px;
        }

        .playground {
          max-width: 700px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          color: white;
          margin-bottom: 40px;
        }

        .header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .header p {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }

        .tabs {
          display: flex;
          gap: 0;
          border-bottom: 2px solid #eee;
        }

        .tab-btn {
          flex: 1;
          padding: 15px;
          border: none;
          background: white;
          color: #666;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
        }

        .tab-btn:hover {
          background: #f8f8f8;
        }

        .tab-btn.active {
          color: #667eea;
          border-bottom-color: #667eea;
        }

        .content {
          padding: 40px;
        }

        .display-area {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 10px;
          margin-bottom: 30px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .joke-text {
          margin-bottom: 20px;
          font-size: 1.1rem;
        }

        .joke-punchline {
          font-size: 1.3rem;
          font-weight: bold;
          color: #ffd700;
        }

        .meme-img {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 15px;
        }

        .meme-info {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .quote-text {
          font-size: 1.3rem;
          font-weight: 500;
          margin-bottom: 15px;
          font-style: italic;
        }

        .quote-author {
          font-size: 1rem;
          opacity: 0.9;
          text-align: right;
        }

        .empty-message {
          color: rgba(255, 255, 255, 0.7);
          font-style: italic;
          text-align: center;
        }

        .error-message {
          background: #ffe0e0;
          color: #d00;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          text-align: center;
        }

        .button-group {
          display: flex;
          gap: 15px;
        }

        button {
          flex: 1;
          padding: 12px 20px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-fetch {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-fetch:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        .btn-fetch:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .loading-spinner {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 600px) {
          .header h1 {
            font-size: 1.8rem;
          }

          .content {
            padding: 25px;
          }

          .tabs {
            flex-wrap: wrap;
          }

          .tab-btn {
            padding: 12px;
            font-size: 0.9rem;
          }

          .display-area {
            min-height: 150px;
            padding: 20px;
          }

          .quote-text {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="playground">
        <div className="header">
          <h1>🎉 API Playground</h1>
          <p>Jokes, Memes & Quotes Generator</p>
        </div>

        <div className="card">
          <div className="tabs">
            <button
              className={`tab-btn ${activeTab === 'joke' ? 'active' : ''}`}
              onClick={() => handleTabChange('joke')}
            >
              😂 Jokes
            </button>
            <button
              className={`tab-btn ${activeTab === 'meme' ? 'active' : ''}`}
              onClick={() => handleTabChange('meme')}
            >
              🖼️ Memes
            </button>
            <button
              className={`tab-btn ${activeTab === 'quote' ? 'active' : ''}`}
              onClick={() => handleTabChange('quote')}
            >
              💡 Quotes
            </button>
          </div>

          <div className="content">
            {error && <div className="error-message">{error}</div>}

            {activeTab === 'joke' && (
              <>
                <div className="display-area">
                  {loading ? (
                    <div style={{ textAlign: 'center' }}>
                      <div className="loading-spinner" style={{ margin: '0 auto' }}></div>
                      <p style={{ marginTop: '15px' }}>Loading joke...</p>
                    </div>
                  ) : joke ? (
                    <>
                      <div className="joke-text">{joke.setup}</div>
                      <div className="joke-punchline">{joke.delivery}</div>
                    </>
                  ) : (
                    <div className="empty-message">Click to generate a joke!</div>
                  )}
                </div>
                <div className="button-group">
                  <button className="btn-fetch" onClick={fetchJoke} disabled={loading}>
                    {loading ? 'Loading...' : '🎲 Get Joke'}
                  </button>
                </div>
              </>
            )}

            {activeTab === 'meme' && (
              <>
                <div className="display-area">
                  {loading ? (
                    <div style={{ textAlign: 'center' }}>
                      <div className="loading-spinner" style={{ margin: '0 auto' }}></div>
                      <p style={{ marginTop: '15px' }}>Loading meme...</p>
                    </div>
                  ) : meme ? (
                    <>
                      <img src={meme.url} alt={meme.title} className="meme-img" />
                      <div style={{ marginBottom: '10px' }}><strong>{meme.title}</strong></div>
                      <div className="meme-info">Posted by {meme.author} in r/{meme.subreddit}</div>
                    </>
                  ) : (
                    <div className="empty-message">Click to generate a meme!</div>
                  )}
                </div>
                <div className="button-group">
                  <button className="btn-fetch" onClick={fetchMeme} disabled={loading}>
                    {loading ? 'Loading...' : '🖼️ Get Meme'}
                  </button>
                </div>
              </>
            )}

            {activeTab === 'quote' && (
              <>
                <div className="display-area">
                  {loading ? (
                    <div style={{ textAlign: 'center' }}>
                      <div className="loading-spinner" style={{ margin: '0 auto' }}></div>
                      <p style={{ marginTop: '15px' }}>Loading quote...</p>
                    </div>
                  ) : quote ? (
                    <>
                      <div className="quote-text">"{quote.text}"</div>
                      <div className="quote-author">— {quote.author}</div>
                    </>
                  ) : (
                    <div className="empty-message">Click to generate a quote!</div>
                  )}
                </div>
                <div className="button-group">
                  <button className="btn-fetch" onClick={fetchQuote} disabled={loading}>
                    {loading ? 'Loading...' : '💡 Get Quote'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
