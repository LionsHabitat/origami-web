import Main from '@/components/Main'
import Meta from '@/components/Meta'
import faqs from '@/utils/FaqConfig'

const Faq = () => (
  <Main
    meta={
      <Meta
        title="FAQs | Open Oracle Origami"
        description="Frequently Asked Questions"
      />
    }
  >
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:px-8">
      <h2 className="mt-20 font-serif text-2xl font-bold leading-10 tracking-tight text-gray-900">
        Frequently Asked Questions
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-7 text-gray-900">
        Have a different question and can&apos;t find the answer you&apos;re
        looking for? Reach out to our discord{' '}
        <a
          href="https://discord.gg/bTY9WkQv"
          target="_blank"
          className="border-none text-gray-600"
        >
          community
        </a>
        .
      </p>
      <div className="mt-20">
        <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
          {faqs.map(faq => (
            <div key={faq.id}>
              <dt className="font-serif text-base font-medium leading-7 text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-900">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </Main>
)

export default Faq
