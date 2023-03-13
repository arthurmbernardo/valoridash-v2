import './Calendar.css';

function BirthdayModel(props) {

    var month = props.dt_nasc.substr(5, 2);
    var day = props.dt_nasc.substr(8, 2);

    return (
        <div className="birthdayModelContainer">
            <p id="birthdayModelName">{props.name}</p>
            <p id="birthdayModelDt_nasc">{day.concat(" - ", month)}</p>
        </div>
    )
}

export default BirthdayModel;