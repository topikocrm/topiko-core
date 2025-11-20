export default function TestPage() {
  return (
    <div style={{padding: '50px', fontSize: '24px', color: 'red'}}>
      <h1>TEST PAGE - THIS SHOULD WORK!</h1>
      <p>If you can see this, Next.js is working!</p>
      <p>Current time: {new Date().toLocaleString()}</p>
    </div>
  );
}