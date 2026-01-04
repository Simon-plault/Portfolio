import './Home.css';
import Header from '../../components/Header/Header';
import ProjectGrid from '../../components/ProjectGrid/ProjectGrid';
import Skills from '../../components/Skills/Skills';
import Experience from '../../components/Experience/Experience';

function Home() {
    return (
        <div>
            <main className="container">
                <Header />
                <div className="layout">
                    <section className="main-col">
                        <ProjectGrid />
                        <Skills />
                    </section>
                    <aside className="side-col">
                        <Experience />
                    </aside>
                </div>
            </main>
        </div>
    );
}

export default Home;