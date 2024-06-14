import PropTypes from 'prop-types';

export default function Footer(props) {
    const { data, handleToggleModal } = props;
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>NASA APOD Project</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    );
}

Footer.propTypes = {
    handleToggleModal: PropTypes.func.isRequired,
};

Footer.propTypes = {
    data: PropTypes.object,
};
