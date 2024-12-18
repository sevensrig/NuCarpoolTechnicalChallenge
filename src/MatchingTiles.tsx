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
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto border border-gray-200">
            <p className="text-xl font-bold text-black">
                <span className="text-red-600">Name: </span>
                {`${currPotentialMatch.firstName} ${currPotentialMatch.lastName}`}
            </p> 
            <p className="text-sm text-gray-700">
                <span className="font-medium text-black">Employer: </span>
                {currPotentialMatch.employer}
            </p>
            <p className="text-sm text-gray-700">
                <span className="font-medium text-black">Start location: </span>
                {currPotentialMatch.startLocation}
            </p>
            <p className="text-sm text-gray-700">
                <span className="font-medium text-black">End location: </span>
                {currPotentialMatch.endLocation}
            </p>
            <p className="text-sm text-gray-700">
                <span className="font-medium text-black">Distance from your starting location: </span>
                {currPotentialMatch.startDistanceDelta}
            </p>
            <p className="text-sm text-gray-700">
                <span className="font-medium text-black">Distance from your ending location: </span>
                {currPotentialMatch.endDistanceDelta}
            </p>

            <div className="flex justify-between mt-6">
                <button 
                    onClick={handleLikeButton} 
                    className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md 
                    hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                    Like
                </button>
                <button 
                    onClick={handleDislikeButton} 
                    className="px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md 
                    hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black">
                    Dislike
                </button>
            </div>
        </div>

        
    );
}

export default MatchingTiles;