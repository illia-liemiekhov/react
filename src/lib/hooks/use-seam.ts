import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { type ClientSession, Seam } from 'seamapi'

import { seamContext } from 'lib/provider.js'

export function useSeam(): {
  client: Seam | null
  isLoading: boolean
  isError: boolean
  error: unknown
} {
  const { client, clientOptions, publishableKey, userIdentifierKey } =
    useContext(seamContext)

  const [clientSession, setClientSession] = useClientSession()

  const { isLoading, isError, error, data } = useQuery<Seam>({
    queryKey: ['client'],
    queryFn: async () => {
      if (client != null) return client

      if (publishableKey == null) {
        throw new Error('Missing publishableKey')
      }

      // TODO: Check if client session is still valid before resuming it.
      if (clientSession != null) {
        return new Seam({
          ...clientOptions,
          clientSessionToken: clientSession.token
        })
      }

      const res = await Seam.getClientSessionToken({
        ...clientOptions,
        publishableKey,
        userIdentifierKey
      })

      if (!res.ok || res.client_session?.token == null) {
        throw new Error('Failed to get client access token')
      }

      setClientSession(res.client_session)

      return new Seam({
        ...clientOptions,
        clientSessionToken: res.client_session.token
      })
    }
  })

  return { client: data ?? null, isLoading, isError, error }
}

function useClientSession(): [
  clientSession: ClientSession | null,
  setClientSession: (clientSession: ClientSession) => void
] {
  const localStorageKey = 'seam_client_session'

  const setClientSession = (clientSession: ClientSession): void => {
    globalThis?.localStorage?.setItem(
      localStorageKey,
      JSON.stringify(clientSession)
    )
  }

  const cachedClientSession = globalThis?.localStorage?.getItem(localStorageKey)

  if (cachedClientSession != null) {
    return [JSON.parse(cachedClientSession), setClientSession]
  }

  return [null, setClientSession]
}
