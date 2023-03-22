import { useNavigate, Link } from "react-router-dom";

export default function Div(props) {
    return (
        <Link to={`/${props.divClass}/${props.word}`} state={`?section=${props.divClass}`} className={`listDiv ${props.divClass}`} key={props.word} >
            {props.word}
        </Link>
    )
}