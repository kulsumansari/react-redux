// define diffrent actions on my component

export const INC = 'INCREMENT'
export const DEC = 'DECREMENT'

export const CounterActions= (type)=>{
    switch(type){
        case INC:
            return{
                type:'INCREMENT'
            }
        case DEC:
            return{
                type:'DECREMENT'
            }
    }
}


