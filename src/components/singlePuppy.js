
import { useParams } from "react-router-dom";

import "./singlePuppy.css"

const SinglePuppy = (props) => {
    const { id } = useParams();
    const { puppyProps } = props;

    const mySelectedPuppy = puppyProps[id]

    return (
        
        <div id="all-puppy-details">
            <p id="puppy-detail-header">Details about {props.puppyProps[id].name}</p>
            <p class="puppy-details">ID: {props.puppyProps[id].id}</p>
            <p class="puppy-details">Name: {props.puppyProps[id].name}</p>
            <p class="puppy-details">Breed: {props.puppyProps[id].breed}</p>
            <p class="puppy-details">Status: {props.puppyProps[id].status}</p>
            <p class="puppy-details">Team ID: {props.puppyProps[id].teamId}</p>
            <img id="puppy-image" src={props.puppyProps[id].imageUrl}></img>
            {/* <p>API Url for Specific Data: {mySelectedPuppy.url}</p> */}
        </div>
    )

}

export default SinglePuppy;