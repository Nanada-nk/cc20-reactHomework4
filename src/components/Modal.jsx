/** @format */

function Modal({ item, onClose }) {
  return (
    <dialog id="product_modal" className="modal scroll-auto" open>
      <div className="modal-box skeleton">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}>
            ✕
          </button>
        </form>
        {item ? (
          <>
            <h3 className="font-bold text-lg pt-2">{item.title}</h3>
            <img
              className="my-4 rounded"
              src={item.image}
              alt={item.title}
            />
            <p className="mb-4">{item.description}</p>
            <p className="text-amber-700 font-bold text-xl">
              Price: {item.price} THB
            </p>
            <div className="text-sm text-gray-500">
              Rate: {item.rating.rate} / Count: {item.rating.count}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}

      </div>
   
    </dialog>
  );
}

export default Modal;
