import Head from 'next/head'

export default function Custom500() {
  return (
    <>
      <Head>
        <title>Server Error - Free Fire Shop</title>
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
        }}>Server Error</h2>
        <p style={{
          color: '#AAA',
          fontSize: '1.1rem',
          marginBottom: '30px',
          maxWidth: '500px'
        }}>
          Sorry, an internal error occurred. Our team is working to resolve it.
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
          Back to Home
        </a>
      </div>
    </>
  )
}
