import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PainelColecao from '../assets/Painel_Colecao.svg';
import PainelCombate from '../assets/Painel_Combate.svg';
import PainelDeck from '../assets/Painel_Deck.svg';

function CarouselHome() {
  return (
    <div>
      <Carousel
        autoPlay
        centerMode
        centerSlidePercentage={80}
        dynamicHeight
        infiniteLoop
        preventMovementUntilSwipeScrollTolerance
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        stopOnHover
        swipeScrollTolerance={50}
        swipeable
        useKeyboardArrows
        emulateTouch
      >
        <div className="mx-1">
          <img className="max-h-[60%]" src={PainelDeck} alt="Painel Colecao" />
        </div>
        <div className="mx-1">
          <img
            className="max-h-[60%]"
            src={PainelColecao}
            alt="Painel Colecao"
          />
        </div>
        <div className="mx-1">
          <img
            className="max-h-[60%]"
            src={PainelCombate}
            alt="Painel Colecao"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
