import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import {selectLoading, selectError} from "../../redux/contacts/selectors"

export default function ContactsPage() {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    return (
     <div>
        <h1>Phonebook</h1>
        <ContactForm  />
        <SearchBox />
        {loading && <p>Loading....</p>}
        {error && <p>Something went wrong, please reload the page</p>}
        <ContactList />
     </div>
    )
}