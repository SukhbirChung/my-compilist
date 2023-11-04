function IsFavAndIsWatched() {
    return (
        <div className="isFavAndIsWatched-container">
            <div className="isFav">
                <label>
                    <input type="checkbox" />
                    <span>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402"
                                fill="#fff" />
                            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402"
                                fill="none" />
                        </svg>
                    </span>
                            Favorite
                        </label>
            </div>
            <div className="isWatched">
                <input type="checkbox" id="isWatched" />
                <label htmlFor="isWatched">Watched</label>
            </div>
        </div>
    );
}

export default IsFavAndIsWatched;