import { matchList } from './data/sample_carpool_data'

function MatchingTiles() {
    return(
        <>
            <div>
                <p>Name</p>
                <p>employer</p>
                <p>start location</p>
                <p>End location</p>
                <p>Distance from user start</p>
                <p>Distance from user end</p>
                <div>
                    <button>up</button>
                    <button>down</button>
                </div>
            </div>
        </>
        
    );
}

export default MatchingTiles;