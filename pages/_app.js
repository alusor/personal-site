import '../styles/globals.css'
import Global from '../global-styles/global-styles'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Global/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
