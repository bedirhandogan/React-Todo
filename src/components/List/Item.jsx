import './styles.css';
import {Done, EditWrite, Trash} from 'assets/index';
import {useState} from "react";

function Item({id, value, done}) {
    const [more, setMore] = useState(false);

    return (
        <div className={'item'}>
            <span className={'value'}>
                {!more ? (value.length >= 40 ? value.slice(0, 40) : value) : value}

                <span className={'more'}
                      onClick={() => setMore(!more)}
                      style={value.length >= 40 ? {display: 'block'} : {display: 'none'}}>...</span>
            </span>

            <div className={'manipulation'}>
                <img src={Done} alt={'done icon'}/>
                <img src={EditWrite} alt={'edit icon'}/>
                <img src={Trash} alt={'trash icon'}/>
            </div>
        </div>
    )
}

export default Item;