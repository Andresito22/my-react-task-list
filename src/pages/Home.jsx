import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

function Home(){
    return (
        <div>
            <h1>ToDoList+</h1>
            <p className='p-home'>Tu lista de tareas personalizada <FontAwesomeIcon icon={faSave} /></p>
        </div>
    );
    
    
    }
    export default Home;
    