import './styles.css';
import {ClearIcon} from "assets/index";

function Form({value, setValue}) {
    const uuid = Math.floor(Math.random() * new Date());
    const storage = localStorage.getItem('tasks');

    function submitHandle(event) {
        event.preventDefault(); // don't default settings
        const oldData = JSON.parse(storage); // parse localstorage
        localStorage.setItem('tasks', JSON.stringify([...oldData, { // do it stringify with storage parsed
            id: uuid, value: value, done: false
        }]));
        setValue(''); // clear value
    }

    return (<form className={'form-container'} onSubmit={event => submitHandle(event)}>
        <div className={'input'}>
            <input type="text"
                   value={value}
                   placeholder={'Enter task'}
                   onChange={event => setValue(event.target.value)}/>
            {!!value && <img src={ClearIcon}
                             alt="clear icon"
                             onClick={() => setValue('')}
            />}
        </div>

        <button type="submit"> Add</button>
    </form>)
}

export default Form;