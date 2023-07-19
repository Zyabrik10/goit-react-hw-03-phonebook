import PropTypes from 'prop-types';

export function ContactList({ filteredContacts, removeFromContactsList }) {
  const removeFromContactsListHandler = ({ currentTarget }) => {
    const id = currentTarget.getAttribute('data-id');
    removeFromContactsList(id);
  };

  return filteredContacts.length ? (
    <ul className="contacts-list global-list">
      {filteredContacts.map(({ number, name, id }) => (
        <li key={id}>
          <p className="global-p">
            {name}: {number}
          </p>
          <button
            className="ph-button global-button"
            data-id={id}
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
