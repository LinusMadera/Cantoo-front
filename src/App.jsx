import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BookCard from './components/Card'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card title="A robot story" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMsYqIfCIEtyog2b8gfkeypDGjjsNeqw_OT1Sggy_SU52Ch33aiMqsZNruTZJWeJpVOw&usqp=CAU" text="Lorem ipsum ipsum ipsum Lorem ipsum ipsum ipsum Lorem ipsum ipsum ipsum Lorem ipsum ipsum ipsum Lorem ipsum ipsum ipsumLorem ipsum ipsum ipsum Lorem ipsum ipsum ipsum"></Card>
      <Card title="A robot story" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMsYqIfCIEtyog2b8gfkeypDGjjsNeqw_OT1Sggy_SU52Ch33aiMqsZNruTZJWeJpVOw&usqp=CAU" text="Lorem ipsum ipsum ipsum"></Card>
      <Card title="A robot story" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMsYqIfCIEtyog2b8gfkeypDGjjsNeqw_OT1Sggy_SU52Ch33aiMqsZNruTZJWeJpVOw&usqp=CAU" text="Lorem ipsum ipsum ipsum"></Card>
    </div>
  )
}

export default App
