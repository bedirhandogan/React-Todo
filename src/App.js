import 'assets/styles/styles.css';
import Form from "components/Form";
import {useEffect, useState} from "react";

function App() {
    // mounted
    useEffect(() => {
        if (!localStorage.getItem('tasks')) {
            localStorage.setItem('tasks', JSON.stringify([]));
        }
    }, []);

    const [value, setValue] = useState('');
    return (<div className={'App'}>
        <div className={'container'}>
            <Form value={value} setValue={setValue}/>
        </div>
    </div>);
}

export default App;