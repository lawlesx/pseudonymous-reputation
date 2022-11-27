import React from 'react'

const featuresContents = [
  {
    title: 'Multi-Vector Grading',
    description: 'ReputeX Score is a dependable numeric derived from a thorough research of various applications, usage history, and insights gained from chain analysis, including your ENS domains and NFTs.'
  },
  {
    title: 'Plug and Play Integration',
    description: 'Make your Dapp attractive for DeFi users with our programmable and customizable ReputeX score. Are you ready to use our DeFi Credit/Reputation Score to build next-gen Dapp?',
  }
  ,
  {
    title: 'Real-time On-chain Score',
    description: 'ReputeX score is calculated and updated in real-time. You can access on-chain ReputeX score in real time to consume it within any Dapp.',
  },
  {
    title: 'Multichain Analysis',
    description: 'ReputeX score is chain-agnostic and computed across Ethereum, Polygon, BSC, Avalanche. More blockchain analysis coming soon.',
  },
  {
    title: 'One Identity, Multiple Use case',
    description: 'Manage your various wallets and multichain activities under a single Decentralized Identity and represent it through ReputeX Score.',
  },
  {
    title: 'Social Connect',
    description: 'Connect your Social Media profiles & Boost your ReputeX score with Gamified User Experience.',
  }
]

const Features = () => {
  return (
    <div className='w-full flex flex-col gap-8 py-20'>
      <h1 className='text-4xl font-rubik text-blue-violet bg-cotton-candy w-max px-10 py-2'>Features</h1>
      <div className='px-20 flex items-center justify-center gap-10 flex-wrap'>
        {featuresContents.map((content, i) => (
          <div className='w-[20rem] h-[20rem] bg-eggshell rounded-3xl flex flex-col gap-8 px-10 py-6' key={i}>
            <h1 className='text-2xl font-semibold text-blue-violet'>{content.title}</h1>
            <p className='text-base font-rubik text-blue-violet'>{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features