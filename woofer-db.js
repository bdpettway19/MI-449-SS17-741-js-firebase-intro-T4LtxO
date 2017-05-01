// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBmZniQM30xGdYqMH6HCsobaAlmP-vaCck',
  authDomain: 'fir-intro-cc6a3.firebaseapp.com',
  databaseURL: 'https://fir-intro-cc6a3.firebaseio.com',
  projectId: 'fir-intro-cc6a3',
  storageBucket: 'fir-intro-cc6a3.appspot.com',
  messagingSenderId: '979100640430'
};

firebase.initializeApp(config)
firebase.auth().signInAnonymously()

// TODO Sign into the database anonymously
// CREATE a new woof in Firebase

function createWoofInDatabase (woof) {
  // TODO create a new record in Firebase
  firebase.database().ref('woofs').push(woof)
}

// READ from Firebase when woofs are added, changed, or removed
// Write a function for each 'on' method and call addWoofRow,
// updateWoofRow, and deleteWoofRow to update the page. Make
// sure to pass the right parameters (hint: these functions are
// defined in woofer-ui.js).
function readWoofsInDatabase () {
  // TODO read new, changed, and deleted Firebase records
  firebase.database().ref('woofs')
  .on('child_added', function (woofSnapshot) {
    addWoofRow(woofSnapshot.key, woofSnapshot.val())
  })
  firebase.database().ref('woofs')
  .on('child_changed', function (woofSnapshot) {
    updateWoofRow(woofSnapshot.key, woofSnapshot.val())
  })
  firebase.database().ref('woofs')
  .on('child_removed', function (woofSnapshot) {
    deleteWoofRow(woofSnapshot.key)
  })
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  // TODO update the record in Firebase
  firebase.database().ref('woofs').child(woofKey).child('text').set(woofText)
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  // TODO delete the record from Firebase
  firebase.database().ref('woofs').child(woofKey).remove()
}

// Load all of the data
readWoofsInDatabase()
