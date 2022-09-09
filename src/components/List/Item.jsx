import './styles.css';
import {Done, EditWrite, Trash} from 'assets/index';
import {useState} from "react";

function Item({item, deleteItem, itemCompleted}) {
    const [more, setMore] = useState(false);

    return (
        <div className={`item ${item.done && 'done__true'}`}>
            <span className={'value'}>
                {!more ? (item?.value?.length >= 40 ? item.value.slice(0, 40) : item.value) : item.value}

                <span className={'more'}
                      onClick={() => setMore(!more)}
                      style={item?.value?.length >= 40 ? {display: 'block'} : {display: 'none'}}>...</span>
            </span>

            <div className={'manipulation'}>
                <img src={Done} alt={'done icon'} onClick={() => itemCompleted(item.id)}/>
                <img src={EditWrite} alt={'edit icon'}/>
                <img src={Trash} alt={'trash icon'} onClick={event => deleteItem(event, item.id)}/>
            </div>
        </div>
    )
}

export default Item;