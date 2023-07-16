import PropTypes from 'prop-types';

export function Filter({ filter, inputFilter }) {
  return (
    <div>
      <p className="contact-list-title global-p">Find contacts by name</p>
      <div className="input-box">
        <input type="text" onChange={inputFilter} value={filter} />
      </div>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  inputFilter: PropTypes.func,
};
