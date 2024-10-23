import { useState } from 'react'
import Title from './components/Title'
import menu from './data'
import Menu from './components/Menu'
import Catagories from './components/Catagories'
const allCatagories = ['all', ...new Set(menu.map((item) => item.category))]
function App() {
  const [menuItems, setMenuItems] = useState(menu)
  const [catagories, setCatagories] = useState(allCatagories)
  const handleItemSelection = (id) => {
    if (id === 'all') {
      setMenuItems(menu)
      return
    }
    setMenuItems(menu.filter((item) => item.category === id))
  }

  return (
    <main className="bg-[rgba(248,_250,_252,_1)] min-h-[90vh] flex justify-center items-center flex-col">
      <Title titleText="Our Menu" />
      <Catagories catagories={catagories} onFilter={handleItemSelection} />
      <Menu menuItems={menuItems} />
    </main>
  )
}

export default App
