import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className='root'>
      <div className='page'>
        <Header />
        <Main />
        <Footer />
      </div>
      <section className='popup popup_type_input' id='delete-conformation'>
        <div className='popup__container popup__container_type_input'>
          <h2 className='popup__title'>Вы уверены?</h2>
          <button className='button popup__exit-button' type='button' aria-label='Закрыть'></button>
          <form
            className='popup__form'
            id='delete-conformation-form'
            action='#'
            name='delete-conformation-form'
            novalidate>
            <button className='button popup__save-button' type='submit' aria-label='Да'>
              Да
            </button>
          </form>
        </div>
      </section>
      <section className='popup popup_type_input' id='edit-avatar'>
        <div className='popup__container popup__container_type_input'>
          <h2 className='popup__title'>Обновить аватар</h2>
          <button className='button popup__exit-button' type='button' aria-label='Закрыть'></button>
          <form
            className='popup__form'
            id='avatar-edit-form'
            action='#'
            name='avatar-edit-form'
            novalidate>
            <input
              className='popup__input'
              id='avatar'
              type='url'
              placeholder='Ссылка на картинку'
              name='avatar'
              required
            />
            <span className='popup__input-error' id='avatar-error'></span>
            <button className='button popup__save-button' type='submit' aria-label='Сохранить'>
              Сохранить
            </button>
          </form>
        </div>
      </section>
      <section className='popup popup_type_input' id='edit-profile'>
        <div className='popup__container popup__container_type_input'>
          <h2 className='popup__title'>Редактировать профиль</h2>
          <button className='button popup__exit-button' type='button' aria-label='Закрыть'></button>
          <form
            className='popup__form'
            id='plofile-edit-form'
            action='#'
            name='profile-edit-form'
            novalidate>
            <input
              className='popup__input'
              id='name'
              type='text'
              placeholder='Имя'
              name='name'
              required
              minlength='2'
              maxlength='40'
            />
            <span className='popup__input-error' id='name-error'>
              Mistake
            </span>
            <input
              className='popup__input'
              id='occupation'
              type='text'
              placeholder='Род занятий'
              name='about'
              required
              minlength='2'
              maxlength='200'
            />
            <span className='popup__input-error' id='occupation-error'></span>
            <button className='button popup__save-button' type='submit' aria-label='Сохранить'>
              Сохранить
            </button>
          </form>
        </div>
      </section>
      <section className='popup popup_type_input' id='add-place'>
        <div className='popup__container popup__container_type_input'>
          <h2 className='popup__title'>Новое место</h2>
          <button className='button popup__exit-button' type='button' aria-label='Закрыть'></button>
          <form
            className='popup__form'
            id='add-element-form'
            action='#'
            name='add-element-form'
            novalidate>
            <input
              className='popup__input'
              id='title'
              type='text'
              placeholder='Название'
              name='name'
              required
              minlength='2'
              maxlength='30'
            />
            <span className='popup__input-error' id='title-error'>
              Mistake
            </span>
            <input
              className='popup__input'
              id='link'
              type='url'
              placeholder='Ссылка на картинку'
              name='link'
              required
            />
            <span className='popup__input-error' id='link-error'></span>
            <button
              className='button popup__save-button popup__save-button_disabled'
              disabled
              type='submit'
              aria-label='Сохранить'>
              Сохранить
            </button>
          </form>
        </div>
      </section>
      <section className='popup popup_type_image' id='image-popup'>
        <div className='popup__container popup__container_type_image'>
          <button className='button popup__exit-button' type='button' aria-label='Закрыть'></button>
          <img className='popup__image' src='#' alt='Фото места' />
          <h2 className='popup__caption'></h2>
        </div>
      </section>
      <template className='element-template'>
        <li className='element'>
          <button
            className='button element__delete-button'
            aria-label='Удалить'
            type='button'></button>
          <img className='element__image' src='#' alt='Фото места' />
          <div className='element__info'>
            <h2 className='element__title'></h2>
            <div className='element__like'>
              <button
                className='button element__like-button'
                aria-label='Понравилось'
                type='button'></button>
              <span className='element__like-counter'></span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
