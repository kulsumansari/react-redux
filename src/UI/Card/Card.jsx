import styles from './Card.module.css'

export default function Card(props){
    let {firstName , lastName , company} =props.data
    return(
        <div className={styles.userDiv}> 
            <h3>{firstName} {lastName}</h3>
            <p>{company}</p>
        </div>
    )
}