import { useRouter } from 'next/router'

import networks from '@/utils/NetworksConfig'

const Networks = () => {
  const router = useRouter()

  return (
    <div className="bg-gray-100 p-3 text-center sm:p-16">
      <h2 className="font-serif text-2xl font-medium text-gray-900 lg:text-5xl">
        Networks
      </h2>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {networks.map(({ name, image }) => (
          <img
            key={name}
            className="col-span-2 max-h-12 w-full object-contain grayscale lg:col-span-1"
            src={`${router.basePath}/assets/images/networks/${image}`}
            alt={name}
            width={158}
            height={48}
          />
        ))}
      </div>
    </div>
  )
}

export default Networks
