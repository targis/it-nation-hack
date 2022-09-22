import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import Container from '../components/ui/Container';
import ContactForm from '../components/ContactForm';
import Button from '../components/ui/Button';
import FormSocialLinks from '../components/FormSocialLinks';
import Pointer from '../icons/contacts/pointer.svg';
import Call from '../icons/contacts/call.svg';
import Email from '../icons/contacts/email.svg';
import Green from '../imgs/map green box.svg'
import Map from '../components/Map';
import PowercodeMarker from '../icons/powercode-marker.svg'


const Contacts = forwardRef(({ setIsModalFormOpen, setIsFormSubmitted }, ref) => {

    const [activeTab, setActiveTab] = useState('Київ')

    const contacts = [
        {
            label: 'Київ', address: 'м.Київ, вул. Верхній Вал, 24', email: 'powercodeacademy@gmail.com', tel: '+38 (073) 126 00 72', coords: [50.465, 30.512],
        },
        {
            label: 'Запоріжжя', address: 'Запоріжжя, проспект Соборний, 160', email: 'powercodeacademy@gmail.com', tel: '+38 (099) 705 14 18', coords: [47.838, 35.1419]
        },
    ]

    const [coordinates, setCoordinates] = useState([50.465, 30.512])

    const handleClick = (label) => {
        setActiveTab(label)
        const { coords } = contacts.find(item => item.label === label)
        setCoordinates(coords)
    }

    return (

        <Container ref={ref}>

            <ContactsWrapper>

                <FormContainer>
                    <ContactForm setIsModalFormOpen={setIsModalFormOpen} setIsFormSubmitted={setIsFormSubmitted} />
                    <GreenSnot>
                        <img src={Green} alt="" />
                    </GreenSnot>
                </FormContainer>

                <ContactsContainer>
                    <ButtonsArea>
                        {contacts && contacts.map(({ label }) => (
                            <ButtonTab
                                key={label}
                                height={'40px'}
                                width={'120px'}
                                margin={'0 10px 0 0'}
                                padding={'0'}
                                size={'14px'}
                                lheight={'114%'}
                                onClick={() => handleClick(label)}
                                isActive={label === activeTab}
                            >
                                {label}
                            </ButtonTab>
                        ))}

                    </ButtonsArea>

                    <ContactInformation>


                        {contacts && contacts.map((item, i) => {
                            return item.label === activeTab
                                ? (<ContactsList key={i} item={item} />)
                                : null
                        })}


                    </ContactInformation>

                    <FormSocialLinks justify={'start'} align={'left'} margin={'3em 0'} />
                </ContactsContainer>

                <MapWrapper>
                    <Map coords={coordinates} />
                    <MapPlaceholder />
                </MapWrapper>


            </ContactsWrapper>

        </Container>


    );
})

export default Contacts;



const ContactsList = ({ item: { address, email, tel } }) => {
    return (
        <ul>
            <ContactItem>
                <img src={Pointer} alt="" />
                {address}
            </ContactItem>
            <ContactItem>
                <img src={Call} alt="" />
                <Link href={`tel:${tel}`}>{tel}</Link>
            </ContactItem>
            <ContactItem>
                <img src={Email} alt="" />
                <Link href={`mailto:${email}?subject=Від%20зацікавленого%20читача&amp;body=Добрий день!%0D%0A%0D%0AВ%20мене%20залишились%20запитання...`}>{email}</Link>

            </ContactItem>
        </ul>

    )
}


const Link = styled.a`
    word-break: break-all;
`

const MapWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 495px;
    overflow: hidden;
    border-radius: 20px;
    overflow: hidden;
`

const MapPlaceholder = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 495px;
    width: 100%;
    background-color: #232F3C;
    z-index: -2;
    border-radius: 20px;
    overflow: hidden;
`

const ButtonTab = styled(Button)`
    background: ${({ isActive }) => isActive ? '#EF5B63' : 'none'};
    border: ${({ isActive }) => isActive ? 'none' : '1px solid #fff'};

`

const GreenSnot = styled.div`
    z-index: -1;
    position: absolute;
    bottom: 320px;
    left: 50%;
    transform: translateX(-50%);
	top: -20px;
`;

const ContactsWrapper = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 495px;
    width: 100%;
    margin-top: 80px;
    margin-bottom: 80px;
    border-radius: 20px;
    @media (max-width: 1170px) {
        height: auto;
    }
`;

const ContactsContainer = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    height: 495px;
    width: 100%;
    padding: 45px;
    /* max-width: 450px;   */
    /* background: #232F3C; */
    border-radius: 20px;
    z-index: 999;
    @media (max-width: 1170px) {
        /* height: 296px; */
        padding: 26px 20px;
    }
`;

const ButtonsArea = styled.div`
    display: flex;
    margin-bottom: 46px;

    @media (max-width: 1170px) {
        justify-content: center;
        margin-bottom: 36px;
    }
`;

const ContactInformation = styled.div`
    /* height: 100%; */
    flex: 1 1 auto;
    z-index: 999;
    @media (max-width: 1170px) {
        flex: 0 1 auto;
    }
`;

const ContactItem = styled.li`
    display: flex;
    align-items: center;

    margin-bottom: 18px;

    list-style-type: none;

    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 178%;
    text-decoration: none;

    color: #FFFFFF;

    overflow: hidden;
    text-overflow: ellipsis;
    a {
        color: #FFFFFF;
    }

    & > img {
        margin-right: 16px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
    & > a {
        color: #FFFFFF;
    }
`;

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-32px, -50%);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 509px;
  padding: 26px 36px;
	padding-top: 0;
  background: #232f3c;
  border-radius: 20px;
	@media (max-width: 1170px) {
        position: relative;
				transform: none;
				margin: 2em auto;
    }
`


const FormHeaderIcon = styled.img`
    
    @media (max-width: 450px) {
        width: 56px;
        height: 56px;
    }
`

