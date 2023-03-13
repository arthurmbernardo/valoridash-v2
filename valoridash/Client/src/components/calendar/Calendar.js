import { useState, useEffect } from 'react';
import Axios from 'axios';
import BirthdayModel from './BirthdayModel';

function Calendar() {

    var today = new Date();
    var todayDay = String(today.getDate()).padStart(2, '0');
    var todayMonth = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

    const [listUsersDt, setListUsersDt] = useState('');

    useEffect(() => {
        Axios.get(process.env.REACT_APP_CLIENT_DT_NASC).then((response) => {
            setListUsersDt(response.data);
            console.log(response.data)
        })
    }, [])

    return (
        <div>
            <section>
                <h3>Aniversários próxmios</h3>
                {Array.from(listUsersDt).map((users, index) => {
                    if (listUsersDt[index].dt_nasc.substr(5, 2) == todayMonth || listUsersDt[index].dt_nasc.substr(5, 2) == todayMonth - '1') {
                        return <BirthdayModel
                            id={listUsersDt[index].id}
                            name={listUsersDt[index].name}
                            dt_nasc={listUsersDt[index].dt_nasc}></BirthdayModel>
                    }
                })}
            </section>
        </div>
    )

}

export default Calendar;