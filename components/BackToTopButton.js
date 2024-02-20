import { divide } from 'lodash';

export default function BackToTopButton() {
  function onClick() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="right-0 sticky bottom-0 place-self-end">
      <button onClick={onClick} className='cursor-pointer bg-transparent leading-none'>
        <img
          alt="backToTopButton"
          src="Back_to_top_bl_pencil_nou.svg"
        />
      </button>
    </div>
  );
}
