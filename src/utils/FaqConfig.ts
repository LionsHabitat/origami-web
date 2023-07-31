export type QuestionAnswer = {
  id: number
  question: string
  answer: string
}

const faq: QuestionAnswer[] = [
  {
    id: 1,
    question: `What is Open Oracle Origami?`,
    answer: `We are a community of builders, researchers, and doers who are working to bring the world's data on-chain. We support the development of open-source tools and infrastructure that make it easier to build and use oracles.`,
  },
]

export default faq
