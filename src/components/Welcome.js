import react from 'react'
function Welcome(props){
    return (
        <div>
            <h1>Hello {props.name} son of {props.father_name}</h1>
            <h1>listen {props.children}</h1>
            {props.children}
        </div>
    )
}

export default Welcome