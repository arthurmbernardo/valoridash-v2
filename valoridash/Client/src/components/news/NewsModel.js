import './News.css';

 function NewsModel(props) {

    return (
        <div className="newsModelContainer">
            <h1 id="newsModelTitle">{props.title}</h1>
            <p id="newsModelContent" >{props.content}</p>
            <p id="newsModelDate">{props.dt_creation}</p>
            <p id="newsModelAuthor">Criado por: {props.author}</p>
        </div>
    )
 }

 export default NewsModel;