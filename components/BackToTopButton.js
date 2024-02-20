
export default function BackToTopButton() {
  function onClick() {
    window.scrollTo(0, 0);
  }
  return (
      <button
        className="border-none cursor-pointer bg-transparent sticky bottom-10 right-10"
        onClick={onClick}
      >
        <img
          className="h-50 place-self-end"
          alt="backToTopButton"
          src="Back_to_top_bl_pencil_nou.svg"
        />
      </button>
  );
}
