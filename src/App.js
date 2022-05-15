import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [data, setData] = useState("white")
  

  function getData() {
    axios.get("https://54.uz/rang.php")
      .then((res) => {
        if (res.data.status === "qora") setData("black")
        else if(res.data.status === "oq") setData("white")
        else if(res.data.status === "yashil") setData("green")
        else if(res.data.status === "qizil") setData("red")
        else if(res.data.status === "ko'k") setData("blue")
        else if(res.data.status === "sariq") setData("yellow")
  })
  }

  useEffect(() => {
    getData()
    const interval = setInterval(()=>{
      getData()
    }, 10000);
    
    return () => {
      clearInterval(interval)
    }
  }, [])
  
  return (
    <Wrapper backColor={data}>
      <h1>{ data }</h1>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ backColor }) => backColor};
  
  color: ${({ backColor }) => backColor === "black" && "white"};
  
  display: flex;
  align-items: center;
  justify-content: center;
`