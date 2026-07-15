import Head from 'next/head'

export default function Custom500() {
  return (
    <>
      <Head>
        <title>Erreur serveur - Free Fire Shop</title>
      </Head>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0F1419 0%, #1A1F2E 100%)',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '20px'
      }}>
        <h1 style={{
          fontSize: '5rem',
          color: '#FF6B35',
          marginBottom: '20px'
        }}>500</h1>
        <h2 style={{
          fontSize: '2rem',
          color: 'white',
          marginBottom: '20px'
        }}>Erreur serveur</h2>
        <p style={{
          color: '#AAA',
          fontSize: '1.1rem',
          marginBottom: '30px',
          maxWidth: '500px'
        }}>
          Désolé, une erreur interne s'est produite. Nos équipes travaillent pour résoudre le problème.
        </p>
        <a href="/" style={{
          background: '#FF6B35',
          color: 'white',
          padding: '15px 40px',
          fontSize: '1.1rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Retour à l'accueil
        </a>
      </div>
    </>
  )
}
