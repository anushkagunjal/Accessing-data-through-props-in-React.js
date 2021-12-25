function Card(props) {
    return (

        <div class="card card1">
            <img className="imgSize img"
                src={props.imgsrc}
            />
          <div class="card-body">
             <h2 class="card-title title"><label>Movie Name :</label> {props.title}</h2>
             <h3 class="card-subtitle mb-2 text-muted subtitle"><label>Director :</label> {props.subtitle}</h3>
             <h4 class="subtitle1"><label>Actors :</label>{props.subtitle1}</h4>
             <p class="card-text text">{props.sname}</p>
             <a href={props.link} class="card-link">
                 <button class="button">Watch Online</button>
             </a>
             <a href={props.link2} class="card-link">
                 <button class="button2">Download</button>
             </a>
          </div>
          <hr />
      </div>

    );
}

export default Card;