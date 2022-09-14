// import './Card.css'

const Card = (props: any) => {
    // const classes = 'card ' + props.className;
    const classes = props.className;
    return(
        <div className={ classes }>{ props.children }</div>
    );
}

export default Card;