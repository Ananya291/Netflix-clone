import React from 'react'
import NewNavbar from "./NewNavbar.js"
import NewBanner from "./NewBanner.js"
import "./Homescreen.css"
import requests from "./Requests"
import Row from "./Row.js"


function Homescreen() {
    return (
        <div className="HomeScreen">
            <NewNavbar />
            <NewBanner />
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTranding} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchCommedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies}/>
        </div>
    );
}
export default Homescreen;