
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase"; // Assuming you have a firebase.js file where you initialize Firebase
import { useState, useEffect } from 'react';
import { useAuth } from "../context/authContext";
import { getAuth } from "firebase/auth";


   
const Favorite = () => {
 const [data, setData] = useState([]);
 useEffect(() =>{
    fetchData();
 }, 
 [])
 
 const fetchData = async () => {
    try {
        
        let userResult;
        const userData = await getDocs(collection(db, "users"))
        const data = userData.forEach((doc) => {
            console.log(doc.data());
            userResult = doc.data();
        
        });
    console.log(data)
    //    const eventGuestsRef = collection(db, "eventGuests").doc(userResult.phoneNumber).collection("eventsInvitedTo");
    //    const unsubscribe = onSnapshot(eventGuestsRef, (guestsData) => {
    //      let guestsResult = [];
    //      guestsData.forEach((doc) => {
    //        guestsResult.push(doc.data());
    //      });
    //      let eventsResult = [];
    //      for (let i = 0; i < guestsResult.length; i++) {
    //        const event = guestsResult[i];
    //        const eventsInvitedTo = await getDocs(collection(db, "events").where("docId", "==", event.eventId));
    //        eventsInvitedTo.forEach((doc) => {
    //          eventsResult.push(doc.data());
    //        });
    //      }
    //      // Assuming you have a state or a way to store the eventsResult
    //      // For example, this.setState({ eventsData: eventsResult });
    //    });
   
       // Remember to unsubscribe when the component unmounts or when you no longer need the data
       return () => unsubscribe();
    } catch (error) {
       console.error("Error fetching data: ", error);
    }
   };

 return (
    <div>
        Favorite
    </div>
 );
};

export default Favorite;
