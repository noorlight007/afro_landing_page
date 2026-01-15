import BtnWithIcon from "../Buttons/BtnWithIcon";

const TiptapModal = ({ isOpen, url, onChange, onCancel, onConfirm }) => {
  if (!isOpen) return null;
  return (
    <>
      <dialog id="link_modal" className="modal modal-open">
        <div className="modal-box relative">
          <h3 className="font-semibold text-lg my-4 text-center">
            Insert Link
          </h3>
          <input
            type="text"
            placeholder="https://example.com"
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2
            border-gray-200 focus:ring-secondary"
            value={url}
            onChange={(e) => onChange(e.target.value)}
          />
          <div className="modal-action">
            <button
              className="text-xl absolute top-0 right-3"
              onClick={onCancel}
            >
              x
            </button>
            <BtnWithIcon onClick={onConfirm} />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default TiptapModal;
