import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TaskFour = () =>
{
    const[currentImage, setCurrentImage] = useState('');

    const[leftArray, setLeftArray] = useState([]);
    const[rightArray, setRightArray] = useState([]);

    const[showAll, setShowAll] = useState(false);

    useEffect(()=>{
        axios
        .get(`https://dog.ceo/api/breeds/image/random`)
        .then(res => setCurrentImage(res.data.message))
        .catch(err => console.log(err.message));
    }, [leftArray, rightArray]);

    const handleLeftArray = () => setLeftArray([ ...leftArray, currentImage ])

    const handleRightArray = () => setRightArray([ ...rightArray, currentImage ])

    const showAllImages = () => setShowAll(true);

    return(
        <>
            <img src={currentImage} alt={`Source: ${currentImage}`} width="250px" height="250px" />

            <div>
                <button onClick={handleLeftArray}>Left Swipe</button>
                <button onClick={handleRightArray}>Right Swipe</button>
            </div>
            

            <button onClick={showAllImages}>Result</button>


            {showAll ? <h3 style={{textAlign: "center"}}>Left Swapped Images</h3> : false}
            <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                {
                    showAll ? leftArray.map((element,index)=> <img src={element} key={index} alt={element} width="150px" height="150px" />) : false
                }
            </div>

            {showAll ? <h3 style={{textAlign: "center"}}>Right Swapped Images</h3> : false}
            <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                {
                    showAll ? rightArray.map((element,index)=> <img src={element} key={index} alt={element} width="150px" height="150px" />) : false
                }
            </div>
        </>
    )
}

export default TaskFour;