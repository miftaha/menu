/* eslint-disable react/prop-types */
import MenuItem from './MenuItem'

const Menu = ({ menuItems }) => {
  return (
    <section className="max-w-[1000px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 ">
      {menuItems.map((item) => {
        return <MenuItem key={item.id} {...item} />
      })}
    </section>
  )
}

export default Menu
