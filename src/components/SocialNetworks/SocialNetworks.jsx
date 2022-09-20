import React from 'react';
import styled from 'styled-components';

import IconSelector from './IconSelector';

const SocialNetworks = ({ color, ...props }) => {

  const socialNetworks = [
    {
      id: 'linkedin', url: 'https://www.linkedin.com/company/powercodeacademy/'
    },
    {
      id: 'facebook', url: 'https://www.facebook.com/powercodeacademy/'
    },
    {
      id: 'youtube', url: 'https://www.youtube.com/channel/UC1oTeYSdBUsEZey2YVVgnxQ'
    },
    {
      id: 'telegram', url: 'https://t.me/powercodeconference'
    },
    {
      id: 'instagram', url: 'https://www.instagram.com/powercodeacademy/'
    },
  ]

  return (
    <SocialNetworkContainer {...props}>
        {socialNetworks.map(network => (
            <SocialNetworkLink
                key={network?.id}
                href={network?.url}
                target='_blank'
            >
                <IconSelector
                    id={network?.id}
                    color={color}
                />
            </SocialNetworkLink>
        ))}
    </SocialNetworkContainer>
  );

}

export default SocialNetworks;

const SocialNetworkContainer = styled.div`
    display: flex;
    justify-content: ${({ justify }) => justify || 'center'};
    align-items: ${({ align }) => align || 'center'};


    height: ${({ height }) => height || 'auto'};
    width: ${({ width }) => width || 'auto'};

    :last-child {
        margin-right: 0;
    }
`;

const SocialNetworkLink = styled.a`
    margin-right: 22px;
`;
