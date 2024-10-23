/* eslint-disable react/prop-types */
const MenuItem = ({ category, desc, id, img, price, title }) => {
  return (
    <article className="max-w-[600px] bg-[rgba(255,_255,_255,_1)] rounded-md shadow-md">
      <img
        src={img}
        alt={title}
        className="w-full h-80 object-cover rounded-t-md"
      />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl tracking-wide capitalize text-[rgba(15,_23,_42,_1)] py-3">
            {title}
          </h2>
          <button className="bg-[rgba(245,_158,_11,_1)] rounded-md px-2 py-1">
            ${price}
          </button>
        </div>
        <p className="text-[rgba(100,_116,_139,_1)]">{desc}</p>
      </div>
    </article>
  )
}

export default MenuItem
