import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
            <Navbar />
          <Home />
          <Gallery />
           <Contact />
      <Card title="A robot story" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMsYqIfCIEtyog2b8gfkeypDGjjsNeqw_OT1Sggy_SU52Ch33aiMqsZNruTZJWeJpVOw&usqp=CAU" text="Lorem ipsum ipsum ipsum Lorem ipsum ipsum ipsum Lorem ipsum ipsum ipsum Lorem ipsum ipsum ipsum Lorem ipsum ipsum ipsumLorem ipsum ipsum ipsum Lorem ipsum ipsum ipsum"></Card>
      <Card title="A robot story" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMsYqIfCIEtyog2b8gfkeypDGjjsNeqw_OT1Sggy_SU52Ch33aiMqsZNruTZJWeJpVOw&usqp=CAU" text="Lorem ipsum ipsum ipsum"></Card>
      <Card title="A robot story" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMsYqIfCIEtyog2b8gfkeypDGjjsNeqw_OT1Sggy_SU52Ch33aiMqsZNruTZJWeJpVOw&usqp=CAU" text="Lorem ipsum ipsum ipsum"></Card>
    </div>
  )
}

export default App
