//****SETINTERVAL () AND SETTIMEOUT ()****//

////* SetInterval is a function that allow you to execute a chunk of code, 
//everyttime a specified amount of milisecond passess.

////* setTimeout allow you to wait a certain amount of time before executing a chunk 
//of code, do note that other code outside of timeout will continue execution as Normal.


 //const interval = setInterval(() => console.log("Hello world"), 1000);
//  clearInterval(interval)

const myInterval = setTimeout(() =>console.log("Hello world"), 10000);


//////*******SYNCHRONOUS JAVA SCRIPT ************/////

////**  SYNCHRONOUS JAVA SCRIPT is the one that the code is been executed line by line and thier task are 
// completed instantly, this meanS thier is no time deley in completion of task 
// for those line of code

// We can invoke in synchronous and  only form down/bottom but the top can not be invoked

// PURPOSE OF CALLBACK
//  CALL BACK IS BASICALLY USED TO SPECIFY WHAT SHOULD HAPPEN AFTE3R A TASK OR OPERATION IS CONPLETE            

// const functionOne = () => {
//     console.log("function One"),
    
//     functionTwo ()
//     console.log("functionOne, part2")
// }

// const functionTwo = () => {
//     console.log("function Two");
//     setTimeout(() => console.log("function Two"), 2000); // for time out setting.
// }
// functionOne()


// //****FECTCH****//

// const fetchUser1 = (username) => {
//     setTimeout(() => {
//         return{user: username}
//     }, 2000);
// }
// const user = fetchUser1("test");
// console.log(user);
// // for us to get anything on the console, we'll set/use call back function, we'll not
// // not get undefined againg



// const fetchUserOne = (username, Callback) => {
//     setTimeout(() => {
//         console.log("Now we have the user");
//         Callback({user: username})
//     }, 2000);
// }

// const user2 = fetchUserOne("Ali", (user2) => {
//     console.log(user2)
// })



// ///**  CALLBACK HELL  **///
// const fetchUserTwo = (username, callback) => {
//     setTimeout(() => {
//       console.log("Now we have the user");
//       callback({ username });
//     }, 2000);
//   };
  
//   // const fetchUserPhotos = (username, callback) => {
//   //   setTimeout(() => {
//   //     console.log(Now we have the photo details ${username});
//   //     callback(["photo1", "photo2"]);
//   //   }, 2000);
//   // };
  
//   // const fetchUserPhotosDetails = (photos, callback) => {
//   //   setTimeout(() => {
//   //     console.log(Now we have the photos details ${photos});
//   //     callback("details");
//   //   }, 2000);
//   // };

//   const user3 = fetchUserTwo("Micheal", (user) => {
//     console.log(`Your name is: ${user.username}`);
//     fetchUserPhotos(user.username, (userphotos) => {
//       console.log(`Your photos are: ${userphotos}`);
//       fetchUserPhotosDetails(userphotos[0], (details) => {
//         console.log(`Your photo details are ${details}`);
//       });
//     });
//   });
  
//   // This is called callback Hell. it becomes unreable
  
//   const user4 = fetchUserTwo("Micheal", (user) => {
//     fetchUserPhotos(user.username, (userPhotos) => {
//       fetchUserPhotosDetails(userPhotos[0], (details) => {
//         fetchUserPhotosDetails(userPhotos[0], (details) => {
//           fetchUserPhotosDetails(userPhotos[0], (details) => {
//             fetchUserPhotosDetails(userPhotos[0], (details) => {
//               console.log(details);
//             });
//           });
//         });
//       });
//     });
//   });



// ///*********** PROMISE ************///


//  ////   PROMISE are object that either return a sucesful fetct data or an error

//  // we'll use then and catch method in promise
//  //(both the positive and negative can not run together at the same time)
//  // (then = true, catch = false)

//  ////////// SYNTAX
//  const pro = new Promise ((resolve, reject) => {})


//  const promise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Now we are Promise");

//       resolve({username: "Bode"})
//       reject("User not Found")  
//     }, 5000);
// });
// promise
// .then((user) => console.log(user.username))
// .catch((error) => console.log(error));

// const fetchUser = (username) => {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("We are using promise")

//         resolve(username);
//     }, 4000);
// })
// };

// const fetchUserPhotos = (username) => {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("We have the photos")

//         resolve(["photos", "photos2"]);
//     }, 4000);
// })
// };

// const fetchUserPhotosDetails = (photo) => {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Now we have the photo details")

//         resolve("details");
//     }, 4000);
// })
// };


// fetchUser("Zainab")
// .then((user) => fetchUserPhotos(user))
// .then((photos) => fetchUserPhotos(photos[0]))
// .then((details) => console.log(details))



///********** ASYNC AND AWAIT ****************///

//Fetching data from API and the AWAIT will pause execution ontill the data is fetct
//AWAIT can only be used be async

//ASYNC function only return soccess 

const displayData = async () => {
  const user = await fetchUser('Soliu');
  const userPhoto = await fetchUserPhotos();
  const userEmail = await fetchMail();

  console.log(user)
}


// // ASYNC AND AWAIT
// anytime we use async, there must be an await

const myUsers = {
  userList:[]
}

const myFoolfunc = async () => {
  // await fetch('https://jsonplaceholder.typicode.com/users'); // (then we add const to save it next line)
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const fetchJson = await response.json();
  console.log(fetchJson)

  return fetchJson
}
const anotherFn = async () => {
  const data = await myFoolfunc ();
  myUsers.userlist = data;
  console.log(myUsers.userList)
}
anotherFn()
// console.log(myUsers.userList)
// myFoolfunc()


/// EXAMPLE 2
const getAllUsersEmail = async () => {
  // await fetch('https://jsonplaceholder.typicode.com/users'); // (then we add const to save it next line)
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const fetchJson = await response.json();
  console.log(fetchJson)

  const email = fetchJson.map((user) => {
    return user.email
  })
  console.log(email)

}
getAllUsersEmail()


const getAllUsersname = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const fetchJson = await response.json();
  const oyee = fetchJson.map((joy) => {
    return joy.username
  })
  console.log(oyee)
}
getAllUsersname()


////************** TRY< CATCH< FINALLY ***********////

const getData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
  } catch (error) {
    console.log("Error:", error.message)
  }
}