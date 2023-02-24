import {createRoot} from "react-dom/client";
import {useState, useEffect} from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"; 
import { AllPuppyList, SinglePuppy } from "./components";






const App = () => {
    const [puppies, setPuppies] = useState([]);
    
    async function fetchPuppyData() {
        try {
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players/");

            const translatedData = await response.json();
            

            setPuppies(translatedData.data.players)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPuppyData();
    }, [])

    return (
    
    <BrowserRouter>
        <div>
            <div id="header-and-homepage">
            <h1 id="header">Puppy Bowl Players</h1>
            
            <nav id="homepage">
                <Link to="/">Homepage</Link>
            </nav>
            </div>

            <Routes>
                <Route path="/" element={<AllPuppyList puppyProps={puppies}/>} />
                <Route path="/puppies/:id" element={<SinglePuppy puppyProps={puppies}/>} />
            </Routes>

        </div>
        </BrowserRouter>
    )

};

const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<App />)