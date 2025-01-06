import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';


const SearchResults = ({onTrackAction, searchResultTracks}) => {

    return (
        <div className={styles.SearchResults}>
            {searchResultTracks.length > 0 ? (
                <div className={styles.SearchResultsContainer}>
                    <h2>Results</h2>
                    <Tracklist
                        tracks={searchResultTracks}
                        button="add"
                        onTrackAction={onTrackAction}
                        keyPrefix="SearchResults"
                    />
                </div>
                ) : (
                    <p>No tracks found.</p>
            )}
        </div>
    );
};

export default SearchResults;