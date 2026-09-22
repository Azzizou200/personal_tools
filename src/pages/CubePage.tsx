import { ToolPage } from '../layout'

export default function CubePage() {
  return (
    <ToolPage>
      <section className="tool-panel cube-panel">
        <div className="cube-mark" aria-hidden="true">◐</div>
        <div>
          <h2>Get unstuck.</h2>
          <p>Enter your cube colors here and we will guide you through the next move.</p>
          <button className="primary-action" onClick={() => window.alert('Cube setup is coming next.')}>Set up your cube</button>
        </div>
      </section>
    </ToolPage>
  )
}
