import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full flex flex-col gap-8 py-20'>
      <h1 className='text-4xl font-rubik text-blue-violet bg-cotton-candy w-max px-10 py-2'>What is Score?</h1>
      <div className='px-20 flex items-center justify-between'>
        <p className='w-1/2 text-2xl text-eggshell'>Score shows your creditworthiness and on-chain behavior within the Web3 ecosystem. We analyze your wallet’s activity across multiple blockchains to give you an accurate Web3 credit score with our proprietary algorithm.</p>
        <Image src="/images/about.svg" width={560} height={560} alt="about" />
      </div>
    </div>
  )
}

export default About