
    
import './index.css'

type Card = {
  title: string
  description: string
  tag: string
  accent: string
  icon: string
  href: string
  featured?: boolean
}



const cards: Card[] = [
  {
    title: 'Chronometer',
    description: 'Just a simple chronometer.',
    tag: 'Popular',
    accent: 'violet',
    icon: '✦',
    href: '/chronometer',
    featured: true,
  },
  {
    title: '3D Rubik\'s cube helper ',
    description: 'Helps you solve 3D Rubik\'s cubes.',
    tag: 'New',
    accent: 'coral',
    icon: '◐',
    href: '/cube',
  },

]

function App() {
  return (
    <main className="page-shell">


      <section className="tool-section" id="tools">
        <div className="section-heading">
          <div className="mt-5">
            <p className="section-kicker">The collection</p>
            <h2>Find your next tool</h2>
          </div>
          
        </div>

        

        <div className="card-grid">
          {cards.map((card) => (
              <a className={card.featured ? 'tool-card featured' : 'tool-card'} href={card.href} key={card.title}>
              <div className={`card-art ${card.accent}`}>
                <span className="card-icon">{card.icon}</span>
                <span className="card-tag">{card.tag}</span>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="card-copy">
                
                <h3>{card.title}</h3>
                <span>{card.description}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <span>Made for the curious.</span>
        <span>© 2025 stack</span>
      </footer>
    </main>
  )
}

export default App
