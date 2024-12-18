import { matchList } from './data/sample_carpool_data'
import { useState } from 'react';

function MatchingTiles() {
    const [ index, setIndex ] = useState(0)
    const [ currPotentialMatch, setCurrPotentialMatch ] = useState(matchList[0])
    function handleLikeButton() {
        setCurrPotentialMatch(matchList[index + 1])
        setIndex(() => index + 1)
    }
    function handleDislikeButton() {
        setCurrPotentialMatch(matchList[index + 1])
        setIndex(() => index + 1)
    }

    return(
        <>
            <div>
                <p>Name: {`${currPotentialMatch.firstName} ${currPotentialMatch.lastName}`}</p>
                <p>Employer: {currPotentialMatch.employer}</p>
                <p>Start location: {currPotentialMatch.startLocation}</p>
                <p>End location: {currPotentialMatch.endLocation}</p>
                <p>Distance from your starting location: {currPotentialMatch.startDistanceDelta}</p>
                <p>Distance from your ending location: {currPotentialMatch.endDistanceDelta}</p>
                <div>
                    <button onClick = {handleLikeButton}>up</button>
                    <button onClick = {handleDislikeButton}>down</button>
                </div>
            </div>
        </>
        
    );
}

export default MatchingTiles;