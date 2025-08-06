
import { useEffect, useState } from 'react'

function Debug({ children }) {
  const [debugMode, setDebugMode] = useState(false)

  useEffect(() => {
    const isDebugMode = document.cookie.includes('debug=true')
    setDebugMode(isDebugMode)
  }, [])

  return debugMode && <div className="accordion debug sticky-bottom d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block" id="accordionDebug">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button bg-warning" type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseDebugInfo" aria-expanded="false" aria-controls="collapseDebugInfo">
          Debug Information
        </button>
      </h2>
      <div id="collapseDebugInfo" className="accordion-collapse collapse" data-bs-parent="#accordionDebug">
        <div className="accordion-body bg-dark text-white">
          <pre>{JSON.stringify(children, null, 2)}</pre>
        </div>
      </div>
    </div>
  </div>
}

export default Debug
