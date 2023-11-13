import './FlashMessage.css';

function FlashMessage(props) {
    return (
        <div className="flash-message">
            <div className={`${props.message.error ? 'error' : 'success'}-flash-message`}>
                {
                    props.message.error ? props.message.error : props.message.success
                }
            </div>
        </div>
    );
}

export default FlashMessage;