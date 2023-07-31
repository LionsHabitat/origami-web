import { useRouter } from 'next/router'

import providers from '@/utils/ProvidersConfig'

const Providers = () => {
  const router = useRouter()

  return (
    <div className="bg-gray-300 p-3 text-center sm:p-16">
      <h2 className="font-serif text-2xl font-medium text-gray-900 lg:text-5xl">
        All This Oracle Data, Simplified.
      </h2>
      <p className="mb-8 text-lg text-gray-900 lg:mb-16 lg:text-2xl">
        We partner with some of the most impactful organizations fueling the
        future of open source software and public goods.
      </p>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {providers.map(({ name, image }) => (
          <img
            key={name}
            className="col-span-2 max-h-12 w-full object-contain grayscale lg:col-span-1"
            src={`${router.basePath}/assets/images/providers/${image}`}
            alt={name}
            width={158}
            height={48}
          />
        ))}
      </div>
    </div>
  )
}

export default Providers
