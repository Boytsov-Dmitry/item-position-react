export default function IconSwitch ({ icon, onSwitch }) {
    return(
        <div className={'iconContainer'}>
            <span className={'material-icons'} onClick={() => onSwitch()}>{icon}</span>
        </div>
    );
};