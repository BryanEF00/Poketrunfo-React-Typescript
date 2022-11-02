import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
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
        emulateTouch
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        stopOnHover
        swipeable
        useKeyboardArrows
      >
        <div className="mx-1">
          <img src={PainelDeck} alt="Painel Colecao" />
        </div>
        <div className="mx-1">
          <img src={PainelColecao} alt="Painel Colecao" />
        </div>
        <div className="mx-1">
          <img src={PainelCombate} alt="Painel Colecao" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
