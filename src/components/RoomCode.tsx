import copyItem from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeFromClipboard() {
        navigator.clipboard.writeText('-Mcq9IV1hyl0QLnOVpLD')
    }

    return (
        <button className="room-code" onClick={copyRoomCodeFromClipboard}>
            <div>
                <img src={copyItem} alt="Copy room code" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    )
}