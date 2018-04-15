var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/homechecker', function() {
  // Load Mongoose models
  seeder.loadModels(['./server/models/Person.js']);

  // Clear specified collections
  seeder.clearModels(['Person'], function() {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});

// Data array containing seed data - documents organized by Model
var data = [
  {
    model: 'Person',
    documents: [
      {
        firstName: 'Katy',
        lastName: 'Cassidy',
        address: '4012 North Hills Drive',
        city: 'Austin',
        stateProvence: 'TX',
        postalCode: '78731',
        email: 'brooke@queensland.com',
        mobile: '512-763-6129',
        role: 'checker'
      },
      {
        firstName: 'Lorelei',
        lastName: 'Cassidy',
        address: '11208 Snow White Dr',
        city: 'Dallas',
        stateProvence: 'TX',
        postalCode: '75229',
        email: 'ihatetoast@normanpark.com',
        mobile: '214-357-5289',
        role: 'checker'
      },
      {
        firstName: 'Sharon',
        lastName: 'Cassidy',
        address: '6608 Welton Dr NE',
        city: 'Albuquerque',
        stateProvence: 'NM',
        postalCode: '87109 ',
        email: 'shazza@dibbers.com',
        mobile: '505-733-5129',
        role: 'applicant'
      },
      {
        firstName: 'Fabian',
        lastName: 'Cassidy',
        address: '7120 North Janmar Dr',
        city: 'Dallas',
        stateProvence: 'TX',
        postalCode: '75230 ',
        email: 'fabby0@tripawd.com',
        mobile: '214-373-1232',
        role: 'applicant'
      },
      {
        firstName: 'Omeau',
        lastName: 'Dessa',
        address: '4110 Pokolodi Cr',
        city: 'Addison',
        stateProvence: 'TX',
        postalCode: '75001 ',
        email: 'omoOmOomo@migaloo.com',
        mobile: '972-385-9673',
        role: 'applicant'
      },
      {
        firstName: 'Elvis',
        lastName: 'Parsley',
        address: '5811 Valerian Pl NE',
        city: 'Albuquerque',
        stateProvence: 'NM',
        postalCode: '87111 ',
        email: 'elvoparpar@hounddog.com',
        mobile: '505-989-4732',
        role: 'applicant'
      },
      {
        firstName: 'Cecil',
        lastName: 'Habermacher',
        address: '508 Wolverton Dr',
        stateProvence: 'TX',
        city: 'Austin',
        postalCode: '78745',
        email: 'cecil@habermacher.com',
        mobile: '512-753-9283',
        role: 'applicant'
      },
      {
        firstName: 'Lance',
        lastName: 'Martin',
        address: '6960 Norway Dr',
        city: 'Dallas',
        stateProvence: 'TX',
        postalCode: '75230',
        email: 'lanceshallots@onionfarmer.com',
        mobile: '214-373-3973',
        role: 'applicant'
      },
      {
        firstName: 'Darren',
        lastName: 'Smith',
        address: '696 Oyster Creek Dr',
        stateProvence: 'TX',
        city: 'Buda',
        postalCode: '78610',
        email: 'dazzamatazza@smithfamily.com',
        mobile: '210-270-1101',
        role: 'checker'
      },
      {
        firstName: 'Thomas',
        lastName: 'Vielleleuelluex',
        address: '104 Irene Street',
        city: 'Elgin',
        stateProvence: 'TX',
        postalCode: '78621',
        email: 'villoodeedoo@mrtom.com',
        mobile: '512-270-1101',
        role: 'checker'
      },
      {
        firstName: 'Darla',
        lastName: 'Thrower',
        address: '106 Irene Street',
        city: 'Elgin',
        stateProvence: 'TX',
        postalCode: '78621',
        email: 'dahlalala@brooke.com',
        mobile: '512-737-2337',
        role: 'applicant'
      },
      {
        firstName: 'Amos',
        lastName: 'Famous',
        address: '1210 Spinnaker Way',
        stateProvence: 'TX',
        city: 'Sugarland',
        postalCode: '77498',
        email: 'cookies@nomnom.com',
        mobile: '512-877-1129',
        role: 'checker'
      }
    ]
  }
];
/*
const mongoose = require('mongoose');
const db = require('../server/models');
mongoose.Promise = global.Promise;

// empties the People collection and inserts the people below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/homechecker', {
  useMongoClient: true
});

const personSeed = [
  {
    firstName: 'Katy',
    lastName: 'Cassidy',
    address: '4012 North Hills Drive',
    city: 'Austin',
    stateProvence: 'TX',
    postalCode: '78731',
    email: 'brooke@queensland.com',
    mobile: '512-763-6129',
    role: 'checker'
  },
  {
    firstName: 'Lorelei',
    lastName: 'Cassidy',
    address: '11208 Snow White Dr',
    city: 'Dallas',
    stateProvence: 'TX',
    postalCode: '75229',
    email: 'ihatetoast@normanpark.com',
    mobile: '214-357-5289',
    role: 'checker'
  },
  {
    firstName: 'Sharon',
    lastName: 'Cassidy',
    address: '6608 Welton Dr NE',
    city: 'Albuquerque',
    stateProvence: 'NM',
    postalCode: '87109 ',
    email: 'shazza@dibbers.com',
    mobile: '505-733-5129',
    role: 'applicant'
  },
  {
    firstName: 'Fabian',
    lastName: 'Cassidy',
    address: '7120 North Janmar Dr',
    city: 'Dallas',
    stateProvence: 'TX',
    postalCode: '75230 ',
    email: 'fabby0@tripawd.com',
    mobile: '214-373-1232',
    role: 'applicant'
  },
  {
    firstName: 'Omeau',
    lastName: 'Dessa',
    address: '4110 Pokolodi Cr',
    city: 'Addison',
    stateProvence: 'TX',
    postalCode: '75001 ',
    email: 'omoOmOomo@migaloo.com',
    mobile: '972-385-9673',
    role: 'applicant'
  },
  {
    firstName: 'Elvis',
    lastName: 'Parsley',
    address: '5811 Valerian Pl NE',
    city: 'Albuquerque',
    stateProvence: 'NM',
    postalCode: '87111 ',
    email: 'elvoparpar@hounddog.com',
    mobile: '505-989-4732',
    role: 'applicant'
  },
  {
    firstName: 'Cecil',
    lastName: 'Habermacher',
    address: '508 Wolverton Dr',
    stateProvence: 'TX',
    city: 'Austin',
    postalCode: '78745',
    email: 'cecil@habermacher.com',
    mobile: '512-753-9283',
    role: 'applicant'
  },
  {
    firstName: 'Lance',
    lastName: 'Martin',
    address: '6960 Norway Dr',
    city: 'Dallas',
    stateProvence: 'TX',
    postalCode: '75230',
    email: 'lanceshallots@onionfarmer.com',
    mobile: '214-373-3973',
    role: 'applicant'
  },
  {
    firstName: 'Darren',
    lastName: 'Smith',
    address: '696 Oyster Creek Dr',
    stateProvence: 'TX',
    city: 'Buda',
    postalCode: '78610',
    email: 'dazzamatazza@smithfamily.com',
    mobile: '210-270-1101',
    role: 'checker'
  },
  {
    firstName: 'Thomas',
    lastName: 'Vielleleuelluex',
    address: '104 Irene Street',
    city: 'Elgin',
    stateProvence: 'TX',
    postalCode: '78621',
    email: 'villoodeedoo@mrtom.com',
    mobile: '512-270-1101',
    role: 'checker'
  },
  {
    firstName: 'Darla',
    lastName: 'Thrower',
    address: '106 Irene Street',
    city: 'Elgin',
    stateProvence: 'TX',
    postalCode: '78621',
    email: 'dahlalala@brooke.com',
    mobile: '512-737-2337',
    role: 'applicant'
  },
  {
    firstName: 'Amos',
    lastName: 'Famous',
    address: '1210 Spinnaker Way',
    stateProvence: 'TX',
    city: 'Sugarland',
    postalCode: '77498',
    email: 'cookies@nomnom.com',
    mobile: '512-877-1129',
    role: 'checker'
  }
];

db.Person.remove({})
  .then(() => db.Person.collection.insertMany(personSeed))
  .then(data => {
    console.log(data.insertedIds.length + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
*/
