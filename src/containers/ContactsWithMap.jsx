import React, { useState, memo } from 'react';
import styled from 'styled-components';

import Container from '../components/ui/Container';
import Btn from '../components/ui/Button';
import Map from '../components/Map';
import SocialNetworks from '../components/SocialNetworks/SocialNetworks';

import Pointer from '../icons/contacts/pointer.svg';
import Call from '../icons/contacts/call.svg';
import Email from '../icons/contacts/email.svg';

const ContactsWithMap = () => {

    const locations = [
        {
            id: 1, 
            name: 'Київ',
            address: 'м.Київ, вул. Верхній Вал, 24', 
            url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.6800290258197!2d30.51074751569838!3d50.46568277947748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce6afceddaf1%3A0xd6c58aa71be8b450!2z0YPQuy4g0JLQtdGA0YXQvdC40Lkg0JLQsNC7LCAyNCwg0JrQuNC10LIsIDA0MDcx!5e0!3m2!1sru!2sua!4v1663601794533!5m2!1sru!2sua', 
            phone: '+38 (073) 126 00 72', 
            email: 'powercodeacademy@gmail.com'
        },
        {
            id: 2, 
            name: 'Запоріжжя',
            address: 'Запоріжжя, проспект Соборний, 160', 
            url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.0770231530173!2d35.139587515603154!3d47.83810117920067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc674bb0bb1157%3A0xb7ce2ffc8d83798c!2z0L_RgNC-0YHQvy4g0KHQvtCx0L7RgNC90YvQuSwgMTYwLCDQl9Cw0L_QvtGA0L7QttGM0LUsINCX0LDQv9C-0YDQvtC20YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDY5MDAw!5e0!3m2!1sru!2sua!4v1663608156432!5m2!1sru!2sua', 
            phone: '+38 (099) 705 14 18', 
            email: 'powercodeacademy@gmail.com'
        }
    ]

    const [location, setLocation] = useState(locations[0]);

    const contacts = [
        {id: 1, icon: Pointer, text: location.address},
        {id: 2, icon: Call, text: location.phone},
        {id: 3, icon: Email, text: location.email}
    ]

    return (
        <Container>
            <ContactsContainer>
                <Map location={location}/>



                <ContactInformation>
                    <ButtonsArea>
                        {locations.map(loc => (
                            <Button
                                active={loc.id === location.id}
                                onClick={() => setLocation(loc)}
                            >
                                {loc.name}
                            </Button>
                        ))}
                    </ButtonsArea>

                    <ContactList>
                        {contacts.map(contact => (
                            <ContactItem
                                key={contact.id}
                            >
                                <img src={contact.icon} alt="" />
                                {contact.text}
                            </ContactItem>
                        ))}
                    </ContactList>

                    <SocialNetworks color='red'/>
                </ContactInformation>
            </ContactsContainer>
        </Container>

    );
}

export default memo(ContactsWithMap);

const ContactsContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;

    height: 495px;
    width: 100%;
    padding: 45px;
    
    border-radius: 20px;
    overflow: hidden;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000000;
        opacity: .7;
        
        z-index: 2;
    }
`;

const ButtonsArea = styled.div`
    display: flex;
    margin-bottom: 46px;

    :last-child {
        margin: 0;
    }

    @media (max-width: 768px) {
        justify-content: center;
        margin-bottom: 36px;
    }
`;

const Button = styled(Btn)`
    width: 120px;
    height: 40px;
    padding: 0;
    margin-right: 10px;

    font-family: 'IBM Plex Mono';
    font-weight: 700;
    font-size: 14px;
    line-height: 114%;

    background: ${({ active }) => active ? '#EF5B63' : 'none'};
    border: ${({ active }) => active ? 'none' : '1px solid #FFFFFF'};

    :hover {
        box-shadow: ${({ active }) => active ? '0px 0px 5px 4px rgba(230, 28, 58, 0.2)' : '0px 0px 5px 4px rgba(255, 255, 255, 0.2)'};
    }

`;

const ContactInformation = styled.address`
    width: 100%;
    max-width: 450px;
    position: relative;
    z-index: 2;
    box-sizing: border-box;
    flex: 1 1 auto;
    @media (max-width: 1170px) {
        flex: 0 1 auto;
    }
`;

const ContactList = styled.ul`
    width: 100%;
`;

const ContactItem = styled.li`
    display: flex;
    align-items: center;
    width: 100%;

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

    & > img {
        height: 24px;
        width: 24px;
        margin-right: 16px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
`;
