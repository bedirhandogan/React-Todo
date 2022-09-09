import 'assets/styles/styles.css';
import Form from "components/Form";
import List from "components/List";
import {useEffect, useState} from "react";

function App() {
    // local den çekilen değer null değilse local'i set et, değerin null ise boş array set et
    const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
    const uuid = Math.floor(Math.random() * new Date()); // basit bir uuid
    const [value, setValue] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks)); // yeni veri local'e set ediliyor
    }, [tasks]);

    function submitHandle(event) {
        event.preventDefault(); // default işlemlere engel oluyorum
        setTasks(prevState => {
            // func'dan gelen event target içinde ki sıfırıncı value değerini alıp set ediyorum
            const arr = [...prevState, {id: uuid, value: event.target[0].value, done: false}];
            //parse olan değerimi string ifadeye döndürüp locale kaydet diyorum
            localStorage.setItem('tasks', JSON.stringify(arr));
            setValue(''); // suyu boşalt :D
            return arr; // döndür
        });
    }

    function deleteItem(event, id) {
        setTasks(prevState => {
            // önce ki verilerimi filtreliyorum ve filtreden gelen id ile func içinde gelen id değerinin eşit olmadığı objeleri alıyorum
            const filtered = prevState.filter(p => p.id !== id);
            // localstorage güncelleniyor
            localStorage.setItem('tasks', JSON.stringify(filtered));
            return filtered; // döndür
        });
    }

    function itemCompleted(id) {
        // state'in verdiği item parametresini id ile eşitliyorum ve dönen index'i alıyorum
        const index = tasks.findIndex(item => item.id === id);
        setTasks(prevState => {
            // state'in içinde ki verilerden index'e eşit olan objemi alıyorum
            const item = prevState[index];
            // 1. virgül; 0 dan id değerime eşit olan index'e kadar olan tüm objeleri set ediyorum
            // 2. virgül; item'ın içinde gelen objemi alıyorum ve yeni değerini set ediyorum
            // 3. virgül; state den gelen objelerimi index değerimden sonrakileri set ediyorum
            return [...prevState.slice(0, index),
                {...item, done: !item.done },
                ...prevState.slice(index + 1)];
        });
    }

    return (<div className={'App'}>
        <div className={'container'}>
            <Form value={value} setValue={setValue} submitHandle={submitHandle}/>
            <List deleteItem={deleteItem} itemCompleted={itemCompleted} tasks={tasks}/>
        </div>
    </div>);
}

export default App;