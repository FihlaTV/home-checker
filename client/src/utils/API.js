import axios from 'axios';

export default {
  // Gets all persons
  getPersons: function() {
    return axios.get('/api/persons');
  },
  getCheckers: function() {
    return axios.get('/api/persons/checkers');
  },
  getApplicants: function() {
    return axios.get('/api/persons/applicants');
  },
  // Gets the pers with the given id
  getPerson: function(id) {
    return axios.get('/api/persons/' + id);
  },
  // Deletes person with the given id
  deletePerson: function(id) {
    return axios.delete('/api/persons/' + id);
  },
  // Saves a pers to the database
  savePerson: function(personData) {
    return axios.post('/api/persons', personData);
  }
};
