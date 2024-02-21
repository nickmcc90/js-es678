function addressMaker(address) {
  const newAddress = {
    city: address.city,
    state: address.state,
    country: 'United States'
  };

}

addressMaker({city: 'Austin', state: 'Texas'});

//Let's make this code more efficient....


function addressMaker(city, state) {
  
  const {city, state} = address;

  const newAddress = {
    city,
    state,
    country: 'United States'
  }; 

  console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}


addressMaker('Austin', 'Texas');