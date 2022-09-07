import 'assets/styles/styles.css';
import Form from "components/Form";
import List from "components/List";
import {useState} from "react";

function App() {
    // local den çekilen değer null değilse local'i set et, değerin null ise boş array set et
    const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
    const uuid = Math.floor(Math.random() * new Date()); // basit bir uuid
    const [value, setValue] = useState('');

    function deleteItem(event, id) {
        setTasks(prevState => {
            // önce ki verilerimi filtreliyorum ve filtreden gelen id ile func içinde gelen id değerinin eşit olmadığı objeleri alıyorum
            const filtered = prevState.filter(p => p.id !== id);
            // localstorage güncelleniyor
            localStorage.setItem('tasks', JSON.stringify(filtered));
            return filtered; // döndür
        });
    }

    function submitHandle(event) {
        event.preventDefault(); // default işlemlere engel oluyorum
        setTasks(prevTasks => {
            // func'dan gelen event target içinde ki sıfırıncı value değerini alıp set ediyorum
            const arr = [...prevTasks, {id: uuid, value: event.target[0].value, done: false}];
            //parse olan değerimi string ifadeye döndürüp locale kaydet diyorum
            localStorage.setItem('tasks', JSON.stringify(arr));
            setValue(''); // suyu boşalt :D
            return arr; // döndür
        });
    }

    return (<div className={'App'}>
        <div className={'container'}>
            <Form value={value} setValue={setValue} submitHandle={submitHandle}/>
            <List deleteItem={deleteItem} tasks={tasks}/>
        </div>
    </div>);
}

export default App;