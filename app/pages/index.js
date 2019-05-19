// import withLayout from '../components/MyLayout'

// const Page = () => <p>Hello Next.js</p>

// export default withLayout(Page)

import Layout from '../components/MyLayout.js'

const indexPageContent = <p>Hello Next.js</p>

export default function Index() {
  return <Layout hogehoge={indexPageContent} />
}