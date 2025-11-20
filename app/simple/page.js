export default function SimplePage() {
  return (
    <html>
      <head>
        <title>Simple Test Page</title>
      </head>
      <body style={{margin: 0, padding: '50px', fontFamily: 'Arial, sans-serif'}}>
        <div style={{
          padding: '40px',
          backgroundColor: '#10B981',
          color: 'white',
          borderRadius: '10px',
          textAlign: 'center',
          fontSize: '24px'
        }}>
          <h1>🎉 NEXT.JS IS WORKING!</h1>
          <p>Time: {new Date().toLocaleString()}</p>
          <p>If you can see this, Next.js server is functioning!</p>
        </div>
        
        <div style={{marginTop: '20px', padding: '20px', border: '2px solid #10B981', borderRadius: '10px'}}>
          <h2>Test Links:</h2>
          <ul>
            <li><a href="/simple" style={{color: '#10B981'}}>This page (/simple)</a></li>
            <li><a href="/" style={{color: '#10B981'}}>Main page (/)</a></li>
            <li><a href="/test" style={{color: '#10B981'}}>Test page (/test)</a></li>
          </ul>
        </div>
      </body>
    </html>
  );
}