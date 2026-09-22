import { useEffect, useState } from 'react'
import { ToolPage } from '../layout'

export default function ChronometerPage() {
  const [milliseconds, setMilliseconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const chronometerInterval = window.setInterval(() => setMilliseconds((value) => value + 1), 1)
    return () => window.clearInterval(chronometerInterval)
  }, [running])
useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      event.preventDefault()
      setRunning((value) => !value)
    }
  }

  window.addEventListener('keydown', handleKeyDown)
  return () => window.removeEventListener('keydown', handleKeyDown)
}, [])
const hours = Math.floor(milliseconds / 360000).toString().padStart(2, '0')
const minutes = Math.floor((milliseconds % 360000) / 6000).toString().padStart(2, '0')
const seconds = Math.floor((milliseconds % 6000) / 100).toString().padStart(2, '0')
const millisecondsDisplay = (milliseconds % 100).toString().padEnd(2, '0')
  return (
    <ToolPage>
      <div>
      <table className="fastest-time-display">
        <tbody>
          <tr>
            <td>Fastest time:</td>
            <td>00:00:00.00</td>
          </tr>
        </tbody>
      </table>
      <div className="absolute min-h-screen w-full flex flex-col justify-center items-center bg-red-100">
        <section className="tool-panel chronometer-panel h-full">
          <div className="chronometer-display ">{hours}:{minutes}:{seconds}.{millisecondsDisplay}</div>
          <p>Press spacebar to start/end.</p>
          <div className="tool-actions">
            <button className="primary-action" onClick={() => setRunning((value) => !value)}>
              {(running) && (
                'Stop'
              )} {(milliseconds > 0) && (
                'continue'
              ) } {(!running && milliseconds === 0) && (
                'Start'
              )}
            </button>
            {(!running) && (
              <button className="secondary-action" onClick={() => setMilliseconds(0)}>Reset</button>
            )}
          </div>
        </section>
      </div>
      </div>
    </ToolPage>
  )
}
