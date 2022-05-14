import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [data, setData] = useState("white")
  
  useEffect(() => {
    axios.get("https://54.uz/rang.php")
      .then((res) => {
        if (res.data.status === "qora") setData("black")
        else if(res.data.status === "oq") setData("white")
        else if(res.data.status === "yashil") setData("green")
        else if(res.data.status === "qizil") setData("red")
        else if(res.data.status === "ko'k") setData("blue")
        else if(res.data.status === "sariq") setData("yellow")
      })
  }, [])
  
  console.log(data)
  return (
    <Wrapper backColor = {data}>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({backColor})=> backColor};
`