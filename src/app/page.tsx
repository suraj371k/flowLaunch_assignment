import Navigation from '../components/Navigation';
import Profile from '../components/Profile';
import Academics from '../components/Academics';
import Skills from '../components/Skills';
import Goals from '../components/Goals';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navigation />
      <Profile />
      <Academics />
      <Skills />
      <Goals />
    </main>
  );
}
