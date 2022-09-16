import styled from "styled-components";
import Logo from '../../icons/logo.svg';
import Container from '../ui/Container';
import Close from '../../icons/btn-close-modal.svg';
import Time from '../../imgs/time-modal.png';
import Boy from '../../imgs/boy-modal 2.png';

const Thankyoupage = () => {
    return (
    <Container>
        <section class='container__section_header section-header'>
          <img class='section-header__logo' src={Logo} alt="" />
          <a href="#" title="Close" class='section-header__close'><img src={Close} alt="" /></a>
        </section>
        <section class='container__section_body section_body'>
          <div class='section_body__leftimage'>
            <img src={Time} alt="" />
          </div>
          <div class='section_body__center'>
            <h1>Дякуємо за заявку!</h1>
            <p>Скоро з вами зв'яжеться наш менеджер, чекайте на дзвінок</p>
            <button>Button</button>
          </div>
          <div class='section_body__rightimage'>
            <img src={Boy} alt="" />
          </div>
        </section>

    </Container>
    )
}
  
export default Thankyoupage

