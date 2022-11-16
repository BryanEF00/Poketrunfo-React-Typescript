import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

function BackToTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleButtonVisibility = () => {
      return window.pageYOffset > 300 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener('scroll', handleButtonVisibility);

    return () => window.removeEventListener('scroll', handleButtonVisibility);
  }, []);

  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div>
      {visible && (
        <button
          className="fixed z-40 right-[5%] bottom-[5%] p-4 rounded-full bg-white  text-black shadow animate-scaleUp"
          type="button"
          onClick={handleScrollToTop}
        >
          <FaChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default BackToTopBtn;
