import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider 
    appId={"cJEFzRMPB66lzVEYBRZzQN7bzfHmKCYfHqSBfjd2"} 
    serverUrl={"https://1z09awaf7hcz.usemoralis.com:2053/server"}>
      <Component {...pageProps} />

      
    </MoralisProvider>
  )

}

export default MyApp
