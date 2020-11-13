import './styles.css'

function Item(props) {

    let urlImage = 'https://static-store.worldticket.com.br/' + props.image
    let name = props.name
    let price = props.price.replace('.', ',')
    price = price.match(/\,\d{2}/) ? price : price +='0'


    return(
        <div className='box'>
            <img src={urlImage} className='image'/>
            <div className='div-text'>
                <p className='name'>{name}</p>
                <p className='price'>R$ {price}</p>
            </div>
        </div>
    )
}

export default Item