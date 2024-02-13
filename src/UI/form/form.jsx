import Input from '../Input/Input'
import Button from '../Button/Button'

export default function Form(props){
    return(
        <form onSubmit={props.onSubmit}>
            <Input type='text' placeholder='Username'/><br/>
            <Input type='password' placeholder='Password'/><br/>
            <Button label='Login' />
        </form>
    )
    
}