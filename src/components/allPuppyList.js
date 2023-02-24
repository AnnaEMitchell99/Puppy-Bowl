import { Link } from "react-router-dom";
import { useState } from "react";
import "./allPuppyList.css"

const AllPuppyList = (props) => {
    const{ puppyProps } = props;

    const [searchQuery, setSearchQuery] = useState("");

    function onChangeCallbackFunc (event) {
        console.log(event.target.value)
    }

    let filteredPuppies = puppyProps.filter((singlePuppyElement) => {
        let lowerCasedName = singlePuppyElement.name.toLowerCase();
        console.log(lowerCasedName)
        return lowerCasedName.includes(searchQuery.toLowerCase())
    })

    return (
        <div> 
            <input id="searchbar"
            type="text"
            placeholder = "Search for puppies here"
            onChange={(event) => {
                setSearchQuery(event.target.value)
            }}
            >
            </input>
            <section id="list-of-puppies-section">
                {
                filteredPuppies.length ? filteredPuppies.map((singlePuppyElement, idx) => {
                    return (
                        <div id="list-of-puppies" key={idx}>
                            <p>Name: {singlePuppyElement.name}</p>
                            <Link id="link" to={"/puppies/" + idx}>Go to {singlePuppyElement.name}'s page</Link>
                        </div>
                    )
                }) : <div>No Puppies Found</div>
            }
            </section>
        </div>

    )

}

export default AllPuppyList;