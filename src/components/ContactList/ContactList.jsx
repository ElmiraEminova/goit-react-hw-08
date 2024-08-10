import { useSelector } from 'react-redux';
import { selectfilteredContacts } from '../../redux/contacts/selectors'
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  
  const filteredContacts = useSelector(selectfilteredContacts)

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}