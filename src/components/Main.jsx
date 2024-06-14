import PropTypes from 'prop-types';

export default function Main(props) {
    const { data, loading, setLoading } = props;

    function imageLoaded() {
        setLoading(false);
    }

    return (
        <>
            <div className="imgContainer">
                <img
                    loading="eager"
                    src={data?.url}
                    srcSet={`${data?.url} 1280w, ${data?.hdurl} 1920w`}
                    alt={data?.title}
                    className="bgImage"
                    onLoad={imageLoaded}
                />
            </div>
            {loading && (
                <div className="loadingState">
                    <i className="fa-solid fa-gear"></i>
                </div>
            )}
        </>
    );
}
Main.propTypes = {
    data: PropTypes.object,
};
Main.propTypes = {
    setLoading: PropTypes.func.isRequired,
};
Main.propTypes = {
    loading: PropTypes.bool.isRequired,
};
