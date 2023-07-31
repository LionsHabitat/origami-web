import Main from '@/components/Main'
import Meta from '@/components/Meta'

const Faq = () => (
  <Main
    meta={<Meta title="FAQs | Open Oracle Origami" description="Lorem ipsum" />}
  >
    <div className="flex min-h-screen flex-col items-center justify-center pt-16 text-center">
      <h1 className="text-5xl">FAQs</h1>
      <div>
        Coming soon... please join the{' '}
        <a
          href="https://discord.gg/bTY9WkQv"
          target="_blank"
          className="border-none text-orange-600"
        >
          community
        </a>{' '}
        to chat now.
      </div>
    </div>
  </Main>
)

export default Faq
