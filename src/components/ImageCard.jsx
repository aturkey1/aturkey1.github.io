import { useState } from "react";

export default function ImageCard({ image }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="flex items-center shadow-sm flex-col relative cursor-pointer"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img
          src={image.src}
          alt={image.description}
          className="rounded-box object-contain w-full aspect-square"
        />
        <div className="absolute text-center bg-neutral/75 text-md lg:text-sm bottom-0 rounded-b-box p-2 right-0 left-0">
          {image.description}
        </div>
      </div>
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box w-full flex items-center justify-center aspect-video max-w-5xl p-0 relative rounded-box">
            <img
              src={image.src}
              alt={image.description}
              className="h-full w-auto"
            />
            <div className="bg-black/40 font-bold absolute bottom-0 left-0 right-0 p-2 text-center">
              {image.description}
            </div>
            <button
              className="btn btn-soft btn-circle absolute top-2 left-2"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form className="modal-backdrop">
            <button onClick={() => setShowModal(false)}>close</button>
          </form>
        </div>
      )}
    </>
  );
}
