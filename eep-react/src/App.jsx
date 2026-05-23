import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Events from './components/Events/Events';
import Lessons from './components/Lessons/Lessons';
import Tutors from './components/Tutors/Tutors';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="events"><Events /></section>
        <section id="lessons"><Lessons /></section>
        <section id="tutors"><Tutors /></section>
      </main>
      <Footer />
    </>
  );
}
