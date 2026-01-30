import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import React, { useEffect, useState } from 'react'
import "leaflet/dist/leaflet.css";
import L from 'leaflet'
import Loading from '../genericcomponent/Loading';
import { socket } from '../../Socket/Socketio';


const RecentMaps=({position})=>{

   const map=useMap();
    useEffect(()=>{
         if(position){
        
        map.setView(position,23,{
            animate:true,
            duration:1.5
        },)
    }
    
    },[position,map])

    return null;
}

export default function MAPCONTAINER() {
    const[position,setposition]=useState(null);
    const[loading,setloading]=useState(true);

    useEffect(()=>{
    //     if(!navigator.geolocation){
    //         alert("Geolocation is not supported by your browser");
    //         setloading(false);
    //         return;
    //     }
    //     navigator.geolocation.getCurrentPosition((position)=>{
    //         const{latitude,longitude}=position.coords;
    //         setposition([latitude,longitude]);
    //         setloading(false);
    //     },
    //     err => {
    //     alert("Error getting location: " + err.message);
    //     setloading(false);
    //   },  { enableHighAccuracy: true }
    // )
    
    if (!navigator.geolocation) {
  alert("Geolocation is not supported");
//   setloading(false);
  return;
}


     const watchId=  navigator.geolocation.watchPosition(
            (position)=>{

                const{latitude,longitude}=position.coords
                    socket.emit("send-loaction",({latitude,longitude}))
                    console.log(latitude,longitude)
                     setposition([latitude,longitude]);
                    setloading(false)
               

            },(err)=>{
                console.log(err)
            },{ enableHighAccuracy: true }
        )


    



 return () => navigator.geolocation.clearWatch(watchId);



    },[])

    if(loading){
        return <Loading message={"Loading map..."}></Loading>
    }
     const icon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30], 
    popupAnchor: [0, -30] 
  });
  const defaultCenter = [28.7041, 77.1025];
  return (

        <MapContainer
        center={position??defaultCenter}
        zoom={23}
          style={{ height: "100%", width: "100%" }}
        
        >
            <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {
            position&&(
                <>
                <RecentMaps position={position}></RecentMaps>
                <Marker position={position} icon={icon}>
                    <Popup>
                        You are here
                    </Popup>
                </Marker>
                </>
            )
        }

        </MapContainer>




      
  
  )
}
