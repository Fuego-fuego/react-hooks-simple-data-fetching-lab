import { useEffect, useState } from "react";

// create your App component here

function App (){
const [imageLoaded, setImageLoaded] = useState(false)
const [image, setImage] = useState('')
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then( data => {              
            setImageLoaded(true);
            setImage(data.message);
        
})},[])

        const imageDisplay = imageLoaded ? <img src={image} alt = "A Random Dog"/> : <p>"Loading..."</p>;
    
    return (
        <div>
        {imageDisplay}
        </div>
    )
}

export default App;