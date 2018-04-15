import axios from 'axios';

export default {
  // Gets all persons
  getPersons: function() {
    return axios.get('/api/persons');
  },
  // Gets the pers with the given id
  getPerson: function(id) {
    return axios.get('/persons/' + id);
  },
  // Deletes person with the given id
  deletePerson: function(id) {
    return axios.delete('/persons/' + id);
  },
  // Saves a pers to the database
  savePerson: function(personData) {
    return axios.post('/persons', personData);
  }
};
