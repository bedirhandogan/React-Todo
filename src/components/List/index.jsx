import './styles.css';
import Item from "components/List/Item";

function List({deleteItem, itemCompleted, editValue, tasks}) {
    return (
        <div className={'list-container'}>
            { tasks && tasks.map(item => <Item item={item} deleteItem={deleteItem}
                                               itemCompleted={itemCompleted}
                                               editValue={editValue}
                                               key={item.id} />
            )}
        </div>
    )
}

export default List;
