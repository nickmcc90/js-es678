const apiUrl = 'someurl'

async function getTop100Campers() {
  const response = await fetch(apiUrl)  // this await says to please wait until we fetch the data.
  const json = await response().json; // please await for our response to turn to json.

  console.log(json[0]);

  // if this function wasn't async, then it would run line 7 quickly not before the other two
  // lines finished, and error out.
}

// async and await method.

// function getTop100Campers() {
//   fetch(apiUrl);
//   .then((r) => r.json());
//   .then((json) => {
//     console.log(json[0])
//   }).catch((error) => {
//     console.log('failed');
//   });

// }

// this method is promises right here above.

getTop100Campers();

// i dont really get this...