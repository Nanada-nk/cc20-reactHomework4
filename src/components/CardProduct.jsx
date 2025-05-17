/** @format */

function CardProduct({ item, onClick }) {
  return (
    <div
      className="p-4 rounded-2xl border border-amber-200 cursor-pointer hover:border-red-500 hover:shadow-lg bg-white"
      onClick={onClick}>
      {/* onClick={onClick}> */}
      <div className="h-30 flex justify-center my-10">
        <img
          className="h-full object-cover"
          src={item?.image}
          alt={item?.title}
        />
      </div>
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-bold">Title : {item?.title}</h2>
        <p className="text-sm line-clamp-3">
          Description : {item?.description}
        </p>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl text-amber-700">
            Price : {item.price} THB
          </h3>
          <div className="flex gap-3 text-gray-400 text-sm">
            <h3>Rate : {item.rating.rate}</h3>
            <h3>Count : {item.rating.count}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
