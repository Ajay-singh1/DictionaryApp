import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect , useState} from 'react';
import Header from './component/Header/Header';
import Definitions from './component/Definitions/Definitions';

function App() {
  
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const dictionaryAPI=async()=>{

    try{
         const data= await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
         setMeanings(data.data);
    }
    
    catch(error){
      console.log(error);
    }
   
  };
  console.log(meanings);
  useEffect(()=>{
      dictionaryAPI();
  },[word,category]);
  return <div className='App' style={{height: "100vh" , backgroundColor: "282c34"}}>
    <Container maxWidth="md" style={{display: "flex" , flexDirection: "column" , height: "100vh"}}>
       <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
      {meanings &&  <Definitions word={word} meanings={meanings}/>}
      
    </Container>
  </div>
}

export default App;