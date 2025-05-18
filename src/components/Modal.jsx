/** @format */

import { LoaderPinwheel } from "lucide-react";

function Modal({ item, onClose }) {
  return (
    <dialog id="my_modal_5" className="modal modal-middle" open>
      <div className="modal-box skeleton">
        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl"
              onClick={onClose}>
              ✕
            </button>
          </form>
        </div>
        {item ? (
          <>
            <h3 className="font-bold text-lg">{item.title}</h3>

            <img
              className="object-contain rounded my-4"
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
          <div className="flex gap-2 justify-center items-center h-40">
          <LoaderPinwheel size={40} className="animate-spin" />
          <p className="text-red-500 font-bold text-4xl">Loading...</p>
        </div>
        )}
      </div>
    </dialog>
  );
}

export default Modal;
