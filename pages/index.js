import styled from 'styled-components'
import Head from 'next/head'

const Title = styled.h1`
  color: red;
  background-color: black;
  font-size: 200px;
`

function Home () {
  return (
    <>
    <Head>
      <title>Eduardo velez blog personal</title>
    </Head>
    <Title>Hola mundo</Title>
    </>
  )
}

export default Home
