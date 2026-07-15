import Head from 'next/head'
import Link from 'next/link'

export default function Tools() {
  const tools = [
    {
      name: 'Joke Generator',
      description: 'Générez des blagues aléatoires',
      emoji: '😂',
      path: '/jokes',
      color: '#667eea'
    },
    {
      name: 'API Playground',
      description: 'Blagues, Memes et Citations',
      emoji: '🎉',
      path: '/api-playground',
      color: '#764ba2'
    },
    {
      name: 'Free Fire Shop',
      description: 'Boutique de diamants et points',
      emoji: '🎮',
      path: '/',
      color: '#FF6B35'
    }
  ]

  return (
    <>
      <Head>
        <title>Tools & Features - Free Fire Shop</title>
        <meta name="description" content="Découvrez tous les outils et fonctionnalités disponibles" />
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

        .tools-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .tools-header {
          text-align: center;
          color: white;
          margin-bottom: 50px;
        }

        .tools-header h1 {
          font-size: 3rem;
          margin-bottom: 15px;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }

        .tool-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tool-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
        }

        .tool-header {
          padding: 30px;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 150px;
          text-align: center;
        }

        .tool-emoji {
          font-size: 3.5rem;
          margin-bottom: 15px;
        }

        .tool-name {
          font-size: 1.5rem;
          font-weight: bold;
        }
      `}</style>

      <div className="tools-container">
        <div className="tools-header">
          <h1>🛠️ Tools & Features</h1>
          <p>All available services</p>
        </div>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <Link key={index} href={tool.path}>
              <div className="tool-card">
                <div className="tool-header" style={{ background: `linear-gradient(135deg, ${tool.color} 0%, ${tool.color}dd 100%)` }}>
                  <div className="tool-emoji">{tool.emoji}</div>
                  <div className="tool-name">{tool.name}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
