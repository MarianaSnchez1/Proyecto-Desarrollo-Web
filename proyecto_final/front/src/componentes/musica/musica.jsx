import React, { Component } from 'react';
import PlayWidget from 'react-spotify-widgets';
import './musicaCss.css';
 
export default class Musica extends Component {
  render() {
    return (
      <div className='Playlists'>
        <br/>
        <br/>
        <h3 className="titulos"> Lo-fi </h3>
        <div>
          <PlayWidget
            width={400}
            height={500}
            uri={'https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM?si=722a47f996554f36'}
            viewCoverArt={true}
            id='lofi1'
          />

        <PlayWidget
          width={400}
          height={500}
          uri={'https://open.spotify.com/playlist/37i9dQZF1DZ06evO0a4fKw?si=556ded72a2fc4d40'}
          viewCoverArt={true}
        />
        </div>

        <br/>
        <br/>
        <h3 className="titulos"> Jazz </h3>
        <PlayWidget
          width={400}
          height={500}
          uri={'https://open.spotify.com/album/1nMHkGDJwTvoW3LTTdUVwA?si=Sgo-uwEESbCHTyrPmxlOEw'}
          viewCoverArt={true}
        />
        <PlayWidget
          width={400}
          height={500}
          uri={'https://open.spotify.com/album/6oXxmHlIYxA9Qh7AxPKWM1?si=j5WLtAdfR7efqznFKKuoSA'}
          viewCoverArt={true}
        />
        <br/>
        <br/>
        <h3 className="titulos"> Clasica </h3>
        <PlayWidget
          width={400}
          height={500}
          uri={'https://open.spotify.com/playlist/3sw0t0icwozVoQP5J2Z8cX?si=1ffd54bfd9f44aee'}
          viewCoverArt={true}
        />
        <PlayWidget
          width={400}
          height={500}
          uri={'https://open.spotify.com/album/3YnHQox6xuosau2QpL5wXz?si=6-zh_2ULTDicej_CTNRv_g'}
          viewCoverArt={true}
        />
        <br/>
        <br/>
        <h3 className="titulos"> Electronica </h3>
        <PlayWidget
          width={400}
          height={500}
          uri={'https://open.spotify.com/playlist/4jdjEp2dl9dR6w4k2VCBTt?si=a723aa4c269147ba'}
          viewCoverArt={true}
        />
        <PlayWidget
          width={400}
          height={500}
          uri={'https://open.spotify.com/playlist/1avkgDWyFn8c0C5nQdyLLI?si=07881e4d885f4f17'}
          viewCoverArt={true}
        />
      </div>
    );
  }
}

