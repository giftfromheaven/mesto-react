import '../index.css';
import { useEffect, useState } from 'react';
import { api } from '../utils/Api';
import Header from './Header';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Card from './Card';
import Main from './Main';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [selectedCard, setSelectedCard] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const onEditProfile = () => {
    setIsEditProfilePopupOpen(true);
  };
  const onAddPlace = () => {
    setIsAddPlacePopupOpen(true);
  };
  const onEditAvatar = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  };

  useEffect(() => {
    api.getCards().then((res) => {
      const arr = res.map((item) => {
        return {
          likes: item.likes.length,
          title: item.name,
          link: item.link,
          id: item._id,
        };
      });
      setCards(arr);
    });
  }, []);

  useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  }, []);

  return (
    <div className='root'>
      <div className='page'>
        <Header />
        <Main
          userName={userName}
          userDescription={userDescription}
          userAvatar={userAvatar}
          handleEditProfileClick={onEditProfile}
          handleAddPlaceClick={onAddPlace}
          handleEditAvatarClick={onEditAvatar}
        />
        <section className='section elements'>
          <ul className='elements__list'>
            {cards.map((card) => {
              return <Card key={card.id} card={card} onCardClick={handleCardClick} />;
            })}
          </ul>
        </section>
        <Footer />
        <PopupWithForm
          name={'edit-profile'}
          title={'Редактировать профиль'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name={'add-place'}
          title={'Новое место'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name={'edit-avatar'}
          title={'Обновить аватар'}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
