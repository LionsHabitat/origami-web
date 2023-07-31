import { useRouter } from 'next/router'
import { useState } from 'react'

import Modal from '@/components/Modal'
import Shape from '@/components/Shape'

const Dot = () => (
  <div className="hidden flex-1 items-center xl:flex">
    <div className="h-10 w-10 rounded-full bg-gray-900" />
  </div>
)

const Decorations = () => {
  const router = useRouter()

  return (
    <>
      <div className="absolute inset-x-0 top-0 mx-auto hidden h-1/2 w-0.5 border-r-2 border-dashed border-slate-500 xl:block" />
      <div className="absolute inset-x-0 bottom-0 mx-auto hidden h-1/2 w-1 bg-slate-500 xl:block" />
      <img
        src={`${router.basePath}/assets/images/reverse-tree-icon.svg`}
        alt="Open Oracle Origami Tree Icon"
        className="absolute inset-x-0 top-3 mx-auto hidden xl:block"
      />
      <img
        src={`${router.basePath}/assets/images/cross-spike-icon.svg`}
        alt="Open Oracle Origami Cross Spike Icon"
        className="absolute inset-x-0 bottom-0 mx-auto hidden translate-y-1/2 xl:block"
      />
    </>
  )
}

const Hero = () => {
  const [aggregateModalOpen, setAggregateModalOpen] = useState(false)

  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap">
        <Decorations />
        <div className="bg-beige-1 flex h-screen w-full flex-col items-center xl:w-1/2">
          <Dot />
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h1 className="mb-10 font-serif text-xl font-medium text-gray-900 sm:text-4xl 2xl:text-5xl">
              Any Form, Any Shape.
              <br />
              Web3&apos;s Modular Open Oracle.
            </h1>
            <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 sm:gap-6">
              <a href="#learn" className="border-none">
                <span className="text-slate-500 sm:text-lg">学び</span>
                <br />
                <span className="text-xl text-gray-900 sm:text-2xl">Learn</span>
              </a>
              <a href="#integrate" className="border-none">
                <span className="text-slate-500 sm:text-lg">統合</span>
                <br />
                <span className="text-xl text-gray-900 sm:text-2xl">
                  Integrate
                </span>
              </a>
              <a href="#build" className="border-none">
                <span className="text-slate-500 sm:text-lg">建てる</span>
                <br />
                <span className="text-xl text-gray-900 sm:text-2xl">Build</span>
              </a>
              <a href="#connect" className="border-none">
                <span className="text-slate-500 sm:text-lg">接する</span>
                <br />
                <span className="text-xl text-gray-900 sm:text-2xl">
                  Connect
                </span>
              </a>
            </div>
          </div>
          <Dot />
        </div>
        <div className="bg-beige-2 flex h-screen w-full flex-col items-center xl:w-1/2">
          <Dot />
          <div className="flex w-full flex-1 flex-col items-center justify-center text-center">
            <Shape
              title="Deploy Origami LSD"
              onClick={() => setAggregateModalOpen(true)}
            >
              <div className="bg-beige-1 relative mx-auto block h-48 w-48 border border-orange-500">
                <div className="absolute inset-x-0 mx-auto h-full w-0.5 border-r border-dashed border-r-orange-300" />
                <div className="absolute inset-y-0 my-auto h-0.5 w-full border-b-2 border-dashed border-b-orange-300" />
              </div>
            </Shape>
          </div>
          <Dot />
        </div>
      </div>
      {aggregateModalOpen && (
        <Modal
          title="Price Aggregate Data Feeds"
          onClose={() => setAggregateModalOpen(false)}
        >
          Open Oracle Origami aggregates exchange rate data from industry
          monoliths, ensuring reliability and accuracy. In liquid staking
          derivatives, precise exchange rate updates are critical to accurately
          value underlying staked assets, enabling users to optimize restaking
          strategies and benefit from unlocked liquidity across DeFi protocols.{' '}
        </Modal>
      )}
    </>
  )
}

export default Hero
