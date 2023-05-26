import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import type { SupportedDeviceContentProps } from 'lib/ui/SupportedDeviceTable/SupportedDeviceContent.js'
import { SupportedDeviceContent } from 'lib/ui/SupportedDeviceTable/SupportedDeviceContent.js'

const client = new QueryClient()

export function SupportedDeviceTable(props: SupportedDeviceContentProps) {
  return (
    <QueryClientProvider client={client}>
      <SupportedDeviceContent {...props} />
    </QueryClientProvider>
  )
}
