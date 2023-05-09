import { useEffect, useState } from 'react'
import Image from 'next/image'

const Chainbreakdown = () => {

  const [score, setScore] = useState(0)

  useEffect(() => {
    setScore(Math.floor((Math.random() * 1000) + 1))
  },[])

  return (
    <div className='w-full h-full flex flex-col items-center justify-center px-20'>
      <h1 className='text-6xl flex flex-col items-center font-bold text-eggshell tracking-widest mt-12 gap-6'>
        Check your Score
        <span className='font-rubik text-cotton-candy'>Breakdown</span>
      </h1>
      <div className='w-full p-20 flex gap-4 justify-center'>
        <div className='relative w-[20rem] h-[25rem] bg-eggshell rounded-3xl'>
          <h1 className='text-[7rem] h-full w-full flex items-center justify-center -rotate-45 font-semibold font-rubik text-space-cadet'>{score}</h1>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='h-full w-[20rem] bg-eggshell p-4 rounded-3xl flex items-center justify-between'>
            <div className='flex flex-col gap-2 p-4'>
              <h1 className='text-2xl font-bold text-dogwood-rose'>Ethereum</h1>
              <p className='text-lg font-medium text-blue-violet w-max px-8 rounded-full bg-cotton-candy'>89</p>
            </div>
            <div className='relative w-20 h-20'><Image src="/images/Ethereum.png" fill alt="Eth hands" style={{ objectFit: 'contain'}}/></div>
          </div>
          <div className='h-full w-[20rem] bg-eggshell p-4 rounded-3xl flex items-center justify-between'>
            <div className='flex flex-col gap-2 p-4'>
              <h1 className='text-2xl font-bold text-dogwood-rose'>BSC</h1>
              <p className='text-lg font-medium text-blue-violet w-max px-8 rounded-full bg-cotton-candy'>0</p>
            </div>
            <div className='relative w-20 h-20'><Image src="/images/Binance.png" fill alt="Binance" style={{ objectFit: 'contain'}}/></div>
          </div>
          <div className='h-full w-[20rem] bg-eggshell p-4 rounded-3xl flex items-center justify-between'>
            <div className='flex flex-col gap-2 p-4'>
              <h1 className='text-2xl font-bold text-dogwood-rose'>Avalanche</h1>
              <p className='text-lg font-medium text-blue-violet w-max px-8 rounded-full bg-cotton-candy'>72</p>
            </div>
            <div className='relative w-20 h-20'><Image src="/images/Avalanche.png" fill alt="Avalanche" style={{ objectFit: 'contain'}}/></div>
          </div>
          <div className='h-full w-[20rem] bg-eggshell p-4 rounded-3xl flex items-center justify-between'>
            <div className='flex flex-col gap-2 p-4'>
              <h1 className='text-2xl font-bold text-dogwood-rose'>Polygon</h1>
              <p className='text-lg font-medium text-blue-violet w-max px-8 rounded-full bg-cotton-candy'>11</p>
            </div>
            <div className='relative w-20 h-20'><Image src="/images/Polygon.png" fill alt="Polygon" style={{ objectFit: 'contain'}}/></div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Chainbreakdown