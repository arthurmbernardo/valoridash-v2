import './News.css';

 function NewsModel(props) {

    return (
        <div className="newsModelContainer">
            <h1 id="newsModelTitle">{props.title}</h1>
            <p id="newsModelDescrip" >{props.descrip}</p>
            <p id="newsModelDate">{props.dt_creation}</p>
        </div>
    )
 }

 export default NewsModel;