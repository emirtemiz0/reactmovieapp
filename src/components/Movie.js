import React, {useState} from 'react'
import ModalVideo from 'react-modal-video'

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {  
  if(vote > 8) { 
      return 'green'
  }
  else if ( vote >= 6) { 
      return 'orange'
  }
  else { 
      return 'red'
  }
}



export const Movie = (props) => {
  const [isOpen, setOpen] = useState(false)

    return (
        <div className='movie'>
              <React.Fragment>
		            	<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

		            	<button className="btn-primary" onClick={()=> setOpen(true)}>Show Trailer</button>
	          	</React.Fragment>

             <img src={IMGPATH + props.data.poster_path} />
            <div className="movie-info">
             <h3>{props.data.title}</h3>
             <span className={setVoteClass(props.data.vote_average)}>{props.data.vote_average}</span>
            </div>

           <div className="movie-over">
               <h2>Overview</h2>
               <p>{props.data.overview}</p>
           </div>

        </div>
    )
}
