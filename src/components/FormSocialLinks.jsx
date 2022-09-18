import React from 'react';
import styled from 'styled-components';

import Linkedin from '../icons/form/linkedin.svg';
import Facebook from '../icons/form/facebook.svg';
import Youtube from '../icons/form/youtube.svg';
import Telegram from '../icons/form/telegram.svg';
import Instagram from '../icons/form/instagram.svg';


const FormSocialLinks = () => {

    const socialNetworks = [
        {
          name: 'linkedin', icon: Linkedin, link: 'https://www.linkedin.com/company/powercodeacademy/'
        },
        {
          name: 'facebook', icon: Facebook, link: 'https://www.facebook.com/powercodeacademy/'
        },
        {
          name: 'youtube', icon: Youtube, link: 'https://www.youtube.com/channel/UC1oTeYSdBUsEZey2YVVgnxQ'
        },
        {
          name: 'telegram', icon: Telegram, link: 'https://t.me/powercodeconference'
        },
        {
          name: 'instagram', icon: Instagram, link: 'https://www.instagram.com/powercodeacademy/'
        },
    ]

    return (
        <SocialLinks>
            {socialNetworks.map(network => (
                <a 
                    key={network?.name}
                    href={network?.link} 
                    target='_blank'
                >
                    <SocialIcon src={network?.icon} />
                </a>
            ))}
        </SocialLinks>
    );
}



export default FormSocialLinks;

const SocialLinks = styled.div`
    display: flex;
    justify-content: ${({ justify }) => justify || 'center'};
    align-items: ${({ align }) => align || 'center'};

    height: ${({ height }) => height || 'center'};
    width: ${({ width }) => width || 'center'};

    :last-child {
        margin-right: 0;
    }
`;

const SocialIcon = styled.img`
    margin-right: 22px;
`;
