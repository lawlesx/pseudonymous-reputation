import '../styles/globals.css'
import Button from '../components/Button'

function MyApp({ Component, pageProps }) {
  return (
  <div className='w-full min-h-screen bg-space-cadet'>
    <div className='flex items-center justify-between p-10'>
      <h1 className='text-cotton-candy text-4xl font-dosis font-bold'>Pseudo <span className='font-rubik text-dogwood-rose '>Rep</span></h1>
      <Button onClick={() => console.log('LOL')}>Connect Wallet</Button>
    </div>
    <Component {...pageProps} />
  </div>
)

}

export default MyApp
