import PropTypes from 'prop-types';

export function ContactList({ filteredContacts, removeFromContactsList }) {
  const removeFromContactsListHandler = ({ currentTarget }) => {
    const index = currentTarget.getAttribute('data-index');
    removeFromContactsList(index);
  };

  return filteredContacts.length ? (
    <ul className="contacts-list global-list">
      {filteredContacts.map(({ number, name, id }, index) => (
        <li key={id}>
          <p className="global-p">
            {name}: {number}
          </p>
          <button
            className="ph-button global-button"
            data-index={index}
            onClick={removeFromContactsListHandler}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p className="global-p">No contacts</p>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.array,
  removeFromContactsList: PropTypes.func,
};
