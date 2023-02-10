import './News.css';

 function NewsModel(props) {

    return (
        <div className="newsModelContainer">
            <h1 className="newsModelTitle">{props.title}</h1>
            <p className="newsModelDescrip" >{props.descrip}</p>
            <p className="newsModelDate">{props.dt_creation}</p>
        </div>
    )
 }

 export default NewsModel;