import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';


const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'Legs'


        },
        {
            id: 2,
            title: 'Back'


        },
        {
            id: 3,
            title: 'Shoulders'


        },
        {
            id: 4,
            title: 'Chest'


        },

        {
            id: 5,
            title: 'Arms'


        }




    ]
    return (
        <div>

            <Directory categories={categories} />;

        </div>


    )
};

export default Home;
