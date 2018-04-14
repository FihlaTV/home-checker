import axios from 'axios';

export default {
  // Gets all persons
  getPersons: function() {
    return axios.get('/api/person');
  },
  // Gets the pers with the given id
  getPerson: function(id) {
    return axios.get('/api/person/' + id);
  },
  // Deletes person with the given id
  deletePerson: function(id) {
    return axios.delete('/api/person/' + id);
  },
  // Saves a pers to the database
  savePerson: function(personData) {
    return axios.post('/api/person', personData);
  }
};
