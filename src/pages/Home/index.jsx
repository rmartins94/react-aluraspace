import Banner from 'components/Banner';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Rodape from 'components/Rodape';
import Galeria from 'components/Galeria';
import Populares from 'components/Populares';

import styles from './Home.module.scss';
export default function Home (){
    return (
        <>
            <Header></Header>
            <main>
                <secton className={styles.principal}>
                    <Menu />
                    <Banner />  


                </secton>
                <div className={styles.galeria}> 
                <Galeria />
                <Populares/>
                </div>
            </main>

            <Rodape />
            
        </>

    )
}