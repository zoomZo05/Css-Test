import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components';

function App() {
  const [data,setData] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      const fetchData = await axios.get("https://picsum.photos/v2/list")
      setData(fetchData.data);
    }

    fetchData();
  },[])

  return (
    <>
    <GlobalStyle/>
    <div>
      <TopText>
        <div>Everyone's photos</div>
        <div><a href='/#'>View all 2,724,700</a></div>
      </TopText>
    <Container>
      {data.map((data,index) => (
        <img src={data.download_url} alt={data.url} key={index} height={data.height} data-width={data.width}></img>
      ))}
    </Container>
    </div>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  box-sizing: border-box;
  gap: 4px;
  img{
    max-height: 150px;
    flex-grow: 1;
    aspect-ratio: auto;
    object-fit: cover;
  }
`
const TopText = styled.div`
  display:flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  a{
    text-decoration: none;
  }
`
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding-top: 1rem;
    padding-left: 4%;
    padding-right: 4%;
    background: #F3F5F6;
  }
`;

