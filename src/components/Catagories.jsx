/* eslint-disable react/prop-types */
const Catagories = ({ catagories, onFilter }) => {
  return (
    <div className="flex items-center justify-between  gap-4">
      {catagories.map((category) => {
        return (
          <button
            key={category}
            className="capitalize bg-[rgba(245,_158,_11,_1)] px-2 py-1 rounded-sm shadow-sm text-white"
            onClick={() => onFilter(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Catagories
