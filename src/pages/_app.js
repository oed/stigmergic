import '@styles/globals.scss'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { ComposeDB } from '../hooks/useComposeDB'

import { WagmiConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'

const PROJECT_ID = 'b2ae80490828ba960b681ac3592546c9'

const chains = [mainnet]
const wagmiConfig = defaultWagmiConfig({ chains, projectId: PROJECT_ID, appName: 'Web3Modal' })
createWeb3Modal({ wagmiConfig, projectId: PROJECT_ID, chains, themeMode: 'light' })

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ComposeDB>
        <Component {...pageProps} />
      </ComposeDB>
    </WagmiConfig>
  )
}

export default MyApp
