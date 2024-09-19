import { useState } from 'react'

import Section from '../Section'
import { GalleryItem } from '../../pages/Home'

import { Action, Item, Items, Modal, ModalContent } from './styles'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMidiaCover = (item: GalleryItem) => {
    if (item.type === 'image') {
      return item.url
    } else {
      return defaultCover
    }
  }
  const getMidiaIcon = (item: GalleryItem) => {
    if (item.type === 'image') {
      return zoom
    } else {
      return play
    }
  }
  const closeModal = () =>
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() =>
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }
            >
              <img
                src={getMidiaCover(media)}
                alt={`Mídia ${index + 1} de ${name} `}
              />
              <Action>
                <img
                  src={getMidiaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe frameBorder={0} src={modal.url}></iframe>
          )}
        </ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
