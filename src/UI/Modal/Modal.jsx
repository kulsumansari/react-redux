import styles from './modal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default function Modal(){
    return(<>
    <div className={styles.modalOverlay}> </div>
     <div className={styles.modal}>
        <h4> <FontAwesomeIcon icon={faTimesCircle} /> Invalid Credentails</h4>
        <p> Username or Password is Invalid!!</p>
    </div>
   
    </>)
}