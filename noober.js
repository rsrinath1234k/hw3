// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // Model Output: Noober X Passenger: Kiley Thompson - (260) 908-6886. Pickup at 1301 N State Pkwy, Chicago, IL 60624. Drop-off at 2362 N Clybourn Ave, Chicago, IL 60657.

  // Store Passenger details into memory

  let passengerFirstName=ride.passengerDetails.first

  console.log(`First name is ${passengerFirstName}`)

  let passengerLastName=ride.passengerDetails.last


  let passengerPhone=ride.passengerDetails.phoneNumber

  // Store Pickup details into memory

  let passengerPAdd=ride.pickupLocation.address
  let passengerPCity=ride.pickupLocation.city
  let passengerPState=ride.pickupLocation.state
  let passengerPZip=ride.pickupLocation.zip

  // Store Dropoff details into memory
  let passengerDAdd=ride.dropoffLocation.address
  let passengerDCity=ride.dropoffLocation.city
  let passengerDState=ride.dropoffLocation.state
  let passengerDZip=ride.dropoffLocation.zip

  // Store Passenger number details into memory

  let passengerPass=ride.numberOfPassengers
  console.log(`Number of passengers is ${passengerPass}`)

  // Store Noober purple details into memory

  let passengerNP=ride.purpleRequested

  // Ascertain level of service, store into memory
  let levelofservice= ''
  if (passengerNP==true) {
    levelofservice='Noober Purple'
  } else if (passengerPass>3 ) {
    levelofservice='Noober XL'
  
  } else {
    levelofservice='Noober X'
  }

  // Write output as per model out listed in line 16

  console.log(`${levelofservice} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerPhone}. Pickup at ${passengerPAdd}, ${passengerPCity}, ${passengerPState} ${passengerPZip}. Dropoff at ${passengerDAdd}, ${passengerDCity}, ${passengerDState} ${passengerDZip}.`)


  // 🔥 YOUR CODE ENDS HERE 🔥
})
