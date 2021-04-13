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
      <title>Running on next 10 :)</title>
    </Head>
    <Title>Esto funciona bastante rapido :o</Title>
    </>
  )
}

export default Home
