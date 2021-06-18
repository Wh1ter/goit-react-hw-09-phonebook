import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import appActions from "../redux/app/app-actions";
import appOperations from "../redux/app/app-operations";
import { connect } from "react-redux";
import selectors from "../redux/app/contacts-selectors";

function ContactsView({
  fetchContacts,
  isLoadingContacts,
  formSubmitHandler,
  filterSet,
  visibleArray,
  contactDelete,
}) {
  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <div className="contacts">
      <h1>Phonebook</h1>
      {isLoadingContacts && <h2>Loading ...</h2>}
      <ContactForm onSubmitData={formSubmitHandler} />
      <h1>Contacts</h1>
      <Filter setFilterToState={filterSet} />
      <ContactList contacts={visibleArray} del={contactDelete} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoadingContacts: selectors.getIsLoading(state),
  contacts: selectors.getContacts(state),
  filter: selectors.getFilter(state),
  visibleArray: selectors.getVisibleFilterArray(state),
});

const mapDispatchToProrps = (dispatch) => ({
  fetchContacts: () => dispatch(appOperations.fetchContacts()),
  formSubmitHandler: (contactData) =>
    dispatch(appOperations.addContact(contactData)),
  contactDelete: (contactId) =>
    dispatch(appOperations.deleteContact(contactId)),
  filterSet: (str) => dispatch(appActions.filterSet(str)),
});

// eslint-disable-next-line
export default connect(mapStateToProps, mapDispatchToProrps)(ContactsView);
