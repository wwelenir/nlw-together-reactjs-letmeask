import copyImg from '../assets/images/copy.svg';
import '../styles/room-code.scss';

type romCodeProps = {
    code: string;
}

export function RoomCode(props: romCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code);
    }

    return (
        <button onClick={copyRoomCodeToClipboard} className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>{props.code}</span>
        </button>
    )
}