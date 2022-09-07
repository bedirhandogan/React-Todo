import './styles.css';
import Item from "components/List/Item";

function List({deleteItem, tasks}) {
    return (
        <div className={'list-container'}>
            { tasks?.map(item => <Item item={item} deleteItem={deleteItem} key={item.id} />) }
        </div>
    )
}

export default List;
