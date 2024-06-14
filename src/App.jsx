import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleToggleModal() {
        setShowModal(!showModal);
    }

    useEffect(() => {
        async function fetchApiData() {
            setLoading(true);

            const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
            const url =
                'https://api.nasa.gov/planetary/apod' +
                `?api_key=${NASA_API_KEY}`;
            console.log(url);
            const today = new Date().toDateString();
            const localKey = `apodData-${today}`;
            const localData = localStorage.getItem(localKey);
            if (localData) {
                setData(JSON.parse(localData));
                console.log('Data loaded from local storage');
                return;
            }
            localStorage.clear();
            try {
                const result = await fetch(url);
                const apiData = await result.json();
                setData(apiData);
                localStorage.setItem(localKey, JSON.stringify(apiData));
                console.log('Data loaded from API');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchApiData();
    }, []);

    return (
        <>
            <Main
                data={data}
                setLoading={setLoading}
                loading={loading}
            />
            <SideBar
                data={data}
                showModal={showModal}
                handleToggleModal={handleToggleModal}
            />
            <Footer
                data={data}
                handleToggleModal={handleToggleModal}></Footer>
        </>
    );
}

export default App;
