import Nav from "./components/Nav"
import Head from "./components/Head"
import Offert from "./components/Offert"
import Gallery from "./components/Gallery"
import Footer from "./components/footer"
import { useEffect, useState } from "react";
import './Style/Style.css';


function App() {
  let [headApi, setHeadApi] = useState();
  let [galleryApi, setGalleryApi] = useState();
  let [isLoad, setIsLoad] = useState(true);
  useEffect(()=>{
    fetch('https://picsum.photos/v2/list?limit=4')
        .then(res =>{
            if(res.status !== 200 ){
                throw Error(res.status);
            }
            else{
                return res.json();
            }
        })
        .then(json => {
          setHeadApi(json)
        })
        .catch(err =>console.log(err))
    fetch('https://picsum.photos/v2/list?limit=6')
        .then(res =>{
            if(res.status !== 200 ){
                throw Error(res.status);
            }
            else{
                return res.json();
            }
        })
        .then(json => {
          setGalleryApi(json)
            setIsLoad(false)
        })
        .catch(err =>console.log(err))
    },[]
  )
    const loadingTrue = (photos, images)=>{
      return(
        <>
        <Nav/>
        <Head photo={photos}/>
        <Offert />
        <Gallery image={images}/>
        <Footer/>
        </>
      )
    }

  return (
    <div className="App">
      {isLoad ? <h1>Load data.... </h1> : loadingTrue(headApi, galleryApi)}
      
      
    </div>
  );
}

export default App;
