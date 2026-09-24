export default function Apropos() {
  return (
    <div style={styles.page}>
      <h1>📖 À Propos</h1>
      <p>Ce projet est une initiation à l'écosystème React, Vite, Node.js et Git.</p>
    </div>
  )
}

const styles = {
  page: { padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }
}