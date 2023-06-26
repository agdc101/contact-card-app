import { useEffect, useState } from 'react';
import Header from './components/Header';
import ContactCards from './components/Contact-cards';
import './assets/App.css'

function App() {
  const [contacts, setContacts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [favs, setFavs] = useState([]);
  const [error, setError] = useState('');

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  function handleFavClick(e) {
    if (e.target.checked) {
      setFavs([...favs, e.target.dataset.attr]);
    } else {
      setFavs(favs.filter(fav => fav !== e.target.dataset.attr));
    }
  }

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch('https://randomuser.me/api/?results=15');
      const data = await response.json();
      if (response.ok) {
        setContacts(data.results);
      } else {
        throw new Error('Error fetching contacts');
      }
    }
    fetchContacts().catch(error => setError(error.message));
  }, []);

  //if sort by name is selected, sort the contacts by first name
  if (sortBy === 'Name') {
    contacts.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      } else if (a.name.first > b.name.first) {
        return 1;
      };
    });
  }

  //map over the contacts array and return a ContactCard component for each contact
  const cards = contacts.map((contact, index) => {
    return (
      <ContactCards 
        id={index}
        key={index} 
        name={`${contact.name.first} ${contact.name.last}`} 
        phone={contact.phone}
        email={contact.email} 
        street={`${contact.location.street.number} ${contact.location.street.name}`}
        city={contact.location.city}
        state={contact.location.state}
        post={contact.location.postcode}
        picture={contact.picture.large}
        handleFavClick={handleFavClick}
      />
    )
  });

  return (
    <site-wrapper>
      {error && <h1 className="error">{error}</h1>}
      <Header handleSortBy={handleSortBy} noOfContacts={contacts.length} favs={favs.length} />
      {cards}
    </site-wrapper>
  )
}

export default App;
