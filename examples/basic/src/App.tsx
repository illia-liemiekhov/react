import '@seamapi/react/index.css'

import { DeviceManager, SeamProvider } from '@seamapi/react'

export const App = (): JSX.Element => {
  return (
    <SeamProvider
      endpoint={import.meta.env.SEAM_ENDPOINT}
      publishableKey={import.meta.env.SEAM_PUBLISHABLE_KEY}
    >
      <main>
        <h1>Seam Components</h1>
        <DeviceManager />
      </main>
    </SeamProvider>
  )
}
