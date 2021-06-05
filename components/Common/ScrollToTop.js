import Scroller from 'react-scroll-up';
import tw from 'twin.macro';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  return (
    <Scroller showUnder={160} style={{ zIndex: 5 }}>
      <div
        css={tw`z-20 rounded-full p-4 bg-light-700 text-light-100 hover:(bg-primary text-light-700)`}
      >
        <FaArrowUp css={tw`w-8 h-8`} />
      </div>
    </Scroller>
  );
}

export default ScrollToTop;
