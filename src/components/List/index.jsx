import './styles.css';
import Item from "components/List/Item";

function List() {
    const storage = JSON.parse(localStorage.getItem('tasks'));

    return (
        <div className={'list-container'}>
            { storage && storage.map(item => <Item id={item.id} value={item.value} done={item.done} key={item.id} />) }
        </div>
    )
}

export default List;
