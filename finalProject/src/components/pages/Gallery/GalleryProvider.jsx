import {createContext, useState} from 'react';

import floor1 from "../../../assets/gallerry/gym-floor-1.png";
import floor2 from "../../../assets/gallerry/gym-floor-2.png";
import floor3 from "../../../assets/gallerry/gym-floor-3.png";
import floor4 from "../../../assets/gallerry/gym-floor-4.png";
import floor5 from "../../../assets/gallerry/gym-floor-5.png";
// import floor6 from "../../../assets/gallerry/gym-floor-6.png";

import classes1 from "../../../assets/gallerry/classes-1.png";
import classes2 from "../../../assets/gallerry/classes-2.png";
import classes3 from "../../../assets/gallerry/classes-3.png";
import classes4 from "../../../assets/gallerry/classes-4.png";
import classes5 from "../../../assets/gallerry/classes-5.png";
// import classes6 from '../../assets/gallerry/classes-6.png';

import trainers1 from '../../../assets/trainers/JackOConnor.jpg';
import trainers2 from '../../../assets/trainers/PatriciaLeanBeefPatty.jpg';
import trainers3 from '../../../assets/trainers/SarahColins.jpg';
import trainers4 from '../../../assets/trainers/trainer1.jpg';
import trainers5 from '../../../assets/trainers/trainer2.png';
import trainers6 from '../../../assets/trainers/trainer3.png';

export const gymPhotos = [
    {
      id: 0,
      src: floor1,
      category: "Gym floor",
      alt: "Main gym floor with free weights area",
      wide: false
    },
    {
      id: 1,
      src: floor2,
      category: "Gym floor",
      alt: "Cardio machines section",
       wide: false
    },
    {
      id: 2,
      src: floor3,
      category: "Gym floor",
      alt: "Squat racks and barbells",
      wide: false
    },
    {
      id: 3,
      src: floor4,
      category: "Gym floor",
      alt: "Stretching and mat area",
      wide: false
    },
    {
      id: 4,
      src: floor5,
      category: "Gym floor",
      alt: "Resistance machines section",
      wide:true
    },
    { id: 5, 
    src: floor5, 
    category: "Gym floor", 
    alt: "Dumbbells rack", 
    wide:false},

    { id: 6, 
    src: floor5, 
    category: "Gym floor", 
    alt: "Dumbbells rack", 
    wide:false},

    { id: 7, 
    src: classes1,
    category: "Classes", 
    alt: "HIIT class in session",
    wide:false },

    {
      id: 8,
      src: classes2,
      category: "Classes",
      alt: "Yoga class morning session",
      wide:false
    },
    { id: 9, 
    src: classes3, 
    category: "Classes", 
    alt: "Spinning class",
    wide:false  },
    
    {
      id: 10,
      src: classes4,
      category: "Classes",
      alt: "Boxing class with pads",
      wide:false
    },
    { id: 11, 
    src: classes5, 
    category: "Classes", 
    alt: "Pilates class",
wide:false},
    {
      id: 12,
      src: classes5,
      category: "Classes",
      alt: "Group fitness session",
      wide:false
    },
    {id: 13,
      src: classes5,
      category: "Classes",
      alt: "Group fitness session",
      wide:true
    }
      ];
    const trainersPhotos = [

    {
      id: 0,
      src: trainers1,
      category: "Trainers",
      alt: "Personal trainer coaching a client",
      wide:false
    },
    {
      id: 1,
      src: trainers2,
      category: "Trainers",
      alt: "Trainer demonstrating proper form",
      wide:false
    },
    {
      id: 2,
      src: trainers3,
      category: "Trainers",
      alt: "One on one training session",
      wide:false
    },
    {
      id: 3,
      src: trainers4,
      category: "Trainers",
      alt: "Trainer assisting with stretching",
      wide:false
    },
    { id: 4, 
    src: trainers5, 
    category: "Trainers", 
    alt: "Trainer team photo",
    wide:true
},
    {
      id: 5,
      src: trainers6,
      category: "Trainers",
      alt: "Trainer running a group warmup",
      wide:false
    },
      {id: 6,
      src: trainers6,
      category: "Trainers",
      alt: "Trainer running a group warmup",
      wide:false
    }
     ];


export const GalleryContext = createContext();

function GalleryProvider({children}){
    const [activeTab, setActiveTab] = useState("All");
    
    const filteredPhotos =
        activeTab === "All"
        ? gymPhotos
        : gymPhotos.filter((photo) => photo.category === activeTab);

    const sliderPhotos =
        activeTab === "All" ? filteredPhotos : filteredPhotos.slice(0, 6);

        return(
            <GalleryContext.Provider value={{activeTab, setActiveTab, sliderPhotos, trainersPhotos}}>
                {children}
            </GalleryContext.Provider>
        );
}
export default GalleryProvider;