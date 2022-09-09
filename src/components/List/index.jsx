import './styles.css';
import Item from "components/List/Item";

function List({deleteItem, itemCompleted, tasks}) {
    return (
        <div className={'list-container'}>
            { tasks && tasks.map(item => <Item item={item} deleteItem={deleteItem} itemCompleted={itemCompleted} key={item.id} />) }
        </div>
    )
}

export default List;
