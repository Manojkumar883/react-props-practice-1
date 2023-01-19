import { reverse } from './helpers'

const NameReversed =(props) => {
    return (
        <p className="name-reversed">
        Also, {props.NameReversed} backwards is {reverse(props.NameReversed)}
      </p>
    )
}

export default NameReversed