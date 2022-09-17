import { Ul, Li } from './styled'
import Linkedin from '../../icons/linkedin.svg'
import Facebook from '../../icons/facebook.svg'
import Youtube from '../../icons/youtube.svg'
import Telegram from '../../icons/telegram.svg'
import Instagram from '../../icons/instagram.svg'


const SocialLinks = ({ self, hiddenMd, visibleXs, size, mb }) => {
  return (
    <Ul self={self} hiddenMd={hiddenMd} visibleXs={visibleXs} mb={mb} >
      {socialLinks.map(({ name, icon, link }) => (
        <Li key={name} size={size}>
          <a href={link} target="_blank" rel="noreferrer">
            <img src={icon} alt={name} />
          </a>
        </Li>
      ))}

    </Ul>
  )
}

export default SocialLinks

const socialLinks = [
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