import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './Data'


export default function App() {
  const cards = data.map((card) => {
    return (
      <Card 
        key={card.id}
        item={card}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='card-list'>
        {cards}
      </div>
    </div>
  );
}