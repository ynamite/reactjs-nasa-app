import PropTypes from 'prop-types';

export default function SideBar(props) {
    const { data, showModal, handleToggleModal } = props;
    return (
        <div className={`sidebar${showModal ? ' show' : ''}`}>
            <div
                className="bgOverlay"
                onClick={handleToggleModal}></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div>
                    <p>
                        <b>Description</b>
                    </p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}
SideBar.propTypes = {
    handleToggleModal: PropTypes.func.isRequired,
};
SideBar.propTypes = {
    data: PropTypes.object,
};
SideBar.propTypes = {
    showModal: PropTypes.bool.isRequired,
};
