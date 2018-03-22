// import axios from 'axios';

// const arrbook = [];

// export default function apiToArr() {

//     book = axios({
//             method: 'get',
//             url: 'https://library-uet.herokuapp.com/books/',
//         })
//         .then(res => res.json() )
//         .then(resjson => resjson.books)
//         ;
//     console.log(book.length);

//     for (let index = 0; index < book.length; index++) {
//         arr = arr.concat([{
//             "id" : book[i].id,
//             "quantity": book[i].quantity,
//             "vn": book[i].name,
//             "en": book[i].description,
//             memorized: true,
//             isEdit: false
//         }])
//     }
//     return arrbook;
// }



const arrbook = [{
    "id": 2,
    "quantity": 8,
    "vn": "Postern of Fate",
    "en": "I solemnly swear I am up to no good.",
    "created_at": "2018-03-21T01:33:07.999Z",
    "updated_at": "2018-03-21T01:33:07.999Z",
    memorized: true,
    isEdit: false
}, {
    "id": 5,
    "quantity": 3,
    "vn": "Mr Standfast",
    "en": "Harry, suffering like this proves you are still a man! This pain is part of being human … the fact that you can feel pain like this is your greatest strength.",
    "created_at": "2018-03-21T01:33:08.048Z",
    "updated_at": "2018-03-21T01:33:08.048Z",
    memorized: true,
    isEdit: false
}, {
    "id": 6,
    "quantity": 6,
    "vn": "Fair Stood the Wind for France",
    "en": "It’s wingardium leviOsa, not leviosAH.",
    "created_at": "2018-03-21T01:33:08.062Z",
    "updated_at": "2018-03-21T01:33:08.062Z",
    memorized: true,
    isEdit: false
}, {
    "id": 7,
    "quantity": 7,
    "vn": "If I Forget Thee Jerusalem",
    "en": "It does not do to dwell on dreams and forget to live.",
    "created_at": "2018-03-21T01:33:08.081Z",
    "updated_at": "2018-03-21T01:33:08.081Z",
    memorized: true,
    isEdit: false
}, {
    "id": 8,
    "quantity": 1,
    "vn": "Where Angels Fear to Tread",
    "en": "Never trust anything that can think for itself if you can't see where it keeps its brain.",
    "created_at": "2018-03-21T01:33:08.095Z",
    "updated_at": "2018-03-21T01:33:08.095Z",
    memorized: true,
    isEdit: false
}, {
    "id": 9,
    "quantity": 4,
    "vn": "The Moon by Night",
    "en": "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    "created_at": "2018-03-21T01:33:08.110Z",
    "updated_at": "2018-03-21T01:33:08.110Z",
    memorized: true,
    isEdit: false
}, {
    "id": 10,
    "quantity": 8,
    "vn": "The Wives of Bath",
    "en": "Words are in my not-so-humble opinion, the most inexhaustible form of magic we have, capable both of inflicting injury and remedying it.",
    "created_at": "2018-03-21T01:33:08.122Z",
    "updated_at": "2018-03-21T01:33:08.122Z",
    memorized: true,
    isEdit: false
}, {
    "id": 11,
    "quantity": 3,
    "vn": "The Widening Gyre",
    "en": "No story lives unless someone wants to listen. The stories we love best do live in us forever. So whether you come back by page or by the big screen, Hogwarts will always be there to welcome you home.",
    "created_at": "2018-03-21T01:33:08.136Z",
    "updated_at": "2018-03-21T01:33:08.136Z",
    memorized: true,
    isEdit: false
}, {
    "id": 12,
    "quantity": 9,
    "vn": "The Sun Also Rises",
    "en": "Of course it is happening inside your head, Harry, but why on Earth should that mean that it is not real?",
    "created_at": "2018-03-21T01:33:08.149Z",
    "updated_at": "2018-03-21T01:33:08.149Z",
    memorized: true,
    isEdit: false
}, {
    "id": 13,
    "quantity": 3,
    "vn": "The Mirror Crack'd from Side to Side",
    "en": "Harry, suffering like this proves you are still a man! This pain is part of being human … the fact that you can feel pain like this is your greatest strength.",
    "created_at": "2018-03-21T01:33:08.155Z",
    "updated_at": "2018-03-21T01:33:08.155Z",
    memorized: true,
    isEdit: false
}, {
    "id": 14,
    "quantity": 1,
    "vn": "Lilies of the Field",
    "en": "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    "created_at": "2018-03-21T01:33:08.173Z",
    "updated_at": "2018-03-21T01:33:08.173Z",
    memorized: true,
    isEdit: false
}, {
    "id": 15,
    "quantity": 8,
    "vn": "A Scanner Darkly",
    "en": "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
    "created_at": "2018-03-21T01:33:08.179Z",
    "updated_at": "2018-03-21T01:33:08.179Z",
    memorized: true,
    isEdit: false
}, {
    "id": 17,
    "quantity": 8,
    "vn": "Stranger in a Strange Land",
    "en": "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    "created_at": "2018-03-21T01:33:08.209Z",
    "updated_at": "2018-03-21T01:33:08.209Z",
    memorized: true,
    isEdit: false
}, {
    "id": 18,
    "quantity": 9,
    "vn": "Dance Dance Dance",
    "en": "It is the unknown we fear when we look upon death and darkness, nothing more.",
    "created_at": "2018-03-21T01:33:08.233Z",
    "updated_at": "2018-03-21T01:33:08.233Z",
    memorized: true,
    isEdit: false
}, {
    "id": 19,
    "quantity": 1,
    "vn": "The Moving Finger",
    "en": "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    "created_at": "2018-03-21T01:33:08.250Z",
    "updated_at": "2018-03-21T01:33:08.250Z",
    memorized: true,
    isEdit: false
}, {
    "id": 20,
    "quantity": 3,
    "vn": "Blood's a Rover",
    "en": "To the well-organized mind, death is but the next great adventure.",
    "created_at": "2018-03-21T01:33:08.268Z",
    "updated_at": "2018-03-21T01:33:08.268Z",
    memorized: true,
    isEdit: false
}, {
    "id": 21,
    "quantity": 7,
    "vn": "Far From the Madding Crowd",
    "en": "Words are in my not-so-humble opinion, the most inexhaustible form of magic we have, capable both of inflicting injury and remedying it.",
    "created_at": "2018-03-21T01:33:08.292Z",
    "updated_at": "2018-03-21T01:33:08.292Z",
    memorized: true,
    isEdit: false
}, {
    "id": 22,
    "quantity": 8,
    "vn": "The Lathe of Heaven",
    "en": "Never trust anything that can think for itself if you can't see where it keeps its brain.",
    "created_at": "2018-03-21T01:33:08.317Z",
    "updated_at": "2018-03-21T01:33:08.317Z",
    memorized: true,
    isEdit: false
}, {
    "id": 23,
    "quantity": 9,
    "vn": "Frequent Hearses",
    "en": "Harry, suffering like this proves you are still a man! This pain is part of being human … the fact that you can feel pain like this is your greatest strength.",
    "created_at": "2018-03-21T01:33:08.336Z",
    "updated_at": "2018-03-21T01:33:08.336Z",
    memorized: true,
    isEdit: false
}, {
    "id": 24,
    "quantity": 4,
    "vn": "Consider Phlebas",
    "en": "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    "created_at": "2018-03-21T01:33:08.345Z",
    "updated_at": "2018-03-21T01:33:08.345Z",
    memorized: true,
    isEdit: false
}, {
    "id": 25,
    "quantity": 1,
    "vn": "A Many-Splendoured Thing",
    "en": "Dark and difficult times lie ahead. Soon we must all face the choice between what is right and what is easy.",
    "created_at": "2018-03-21T01:33:08.353Z",
    "updated_at": "2018-03-21T01:33:08.353Z",
    memorized: true,
    isEdit: false
}, {
    "id": 26,
    "quantity": 4,
    "vn": "Nine Coaches Waiting",
    "en": "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
    "created_at": "2018-03-21T01:33:08.360Z",
    "updated_at": "2018-03-21T01:33:08.360Z",
    memorized: true,
    isEdit: false
}, {
    "id": 27,
    "quantity": 8,
    "vn": "Of Human Bondage",
    "en": "We could all have been killed - or worse, expelled.",
    "created_at": "2018-03-21T01:33:08.368Z",
    "updated_at": "2018-03-21T01:33:08.368Z",
    memorized: true,
    isEdit: false
}, {
    "id": 28,
    "quantity": 2,
    "vn": "Down to a Sunless Sea",
    "en": "Happiness can be found even in the darkest of times if only one remembers to turn on the light.",
    "created_at": "2018-03-21T01:33:08.377Z",
    "updated_at": "2018-03-21T01:33:08.377Z",
    memorized: true,
    isEdit: false
}, {
    "id": 29,
    "quantity": 10,
    "vn": "The Lathe of Heaven",
    "en": "Just because you have the emotional range of a teaspoon doesn’t mean we all have.",
    "created_at": "2018-03-21T01:33:08.385Z",
    "updated_at": "2018-03-21T01:33:08.385Z",
    memorized: true,
    isEdit: false
}, {
    "id": 30,
    "quantity": 10,
    "vn": "Stranger in a Strange Land",
    "en": "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
    "created_at": "2018-03-21T01:33:08.393Z",
    "updated_at": "2018-03-21T01:33:08.393Z",
    memorized: true,
    isEdit: false
}, {
    "id": 31,
    "quantity": 2,
    "vn": "If Not Now, When?",
    "en": "Never trust anything that can think for itself if you can't see where it keeps its brain.",
    "created_at": "2018-03-21T01:33:08.402Z",
    "updated_at": "2018-03-21T01:33:08.402Z",
    memorized: true,
    isEdit: false
}, {
    "id": 32,
    "quantity": 7,
    "vn": "Surprised by Joy",
    "en": "It is the unknown we fear when we look upon death and darkness, nothing more.",
    "created_at": "2018-03-21T01:33:08.410Z",
    "updated_at": "2018-03-21T01:33:08.410Z",
    memorized: true,
    isEdit: false
}, {
    "id": 33,
    "quantity": 4,
    "vn": "No Country for Old Men",
    "en": "No story lives unless someone wants to listen. The stories we love best do live in us forever. So whether you come back by page or by the big screen, Hogwarts will always be there to welcome you home.",
    "created_at": "2018-03-21T01:33:08.419Z",
    "updated_at": "2018-03-21T01:33:08.419Z",
    memorized: true,
    isEdit: false
}, {
    "id": 34,
    "quantity": 1,
    "vn": "Waiting for the Barbarians",
    "en": "Harry, suffering like this proves you are still a man! This pain is part of being human … the fact that you can feel pain like this is your greatest strength.",
    "created_at": "2018-03-21T01:33:08.427Z",
    "updated_at": "2018-03-21T01:33:08.427Z",
    memorized: true,
    isEdit: false
}, {
    "id": 35,
    "quantity": 6,
    "vn": "Number the Stars",
    "en": "You're a wizard, Harry.",
    "created_at": "2018-03-21T01:33:08.434Z",
    "updated_at": "2018-03-21T01:33:08.434Z",
    memorized: true,
    isEdit: false
}, {
    "id": 36,
    "quantity": 5,
    "vn": "Fear and Trembling",
    "en": "Never trust anything that can think for itself if you can't see where it keeps its brain.",
    "created_at": "2018-03-21T01:33:08.447Z",
    "updated_at": "2018-03-21T01:33:08.447Z",
    memorized: true,
    isEdit: false
}, {
    "id": 37,
    "quantity": 7,
    "vn": "The Mirror Crack'd from Side to Side",
    "en": "It’s wingardium leviOsa, not leviosAH.",
    "created_at": "2018-03-21T01:33:08.463Z",
    "updated_at": "2018-03-21T01:33:08.463Z",
    memorized: true,
    isEdit: false
}, {
    "id": 38,
    "quantity": 2,
    "vn": "A Summer Bird-Cage",
    "en": "Of course it is happening inside your head, Harry, but why on Earth should that mean that it is not real?",
    "created_at": "2018-03-21T01:33:08.481Z",
    "updated_at": "2018-03-21T01:33:08.481Z",
    memorized: true,
    isEdit: false
}, {
    "id": 39,
    "quantity": 9,
    "vn": "A Passage to India",
    "en": "I solemnly swear I am up to no good.",
    "created_at": "2018-03-21T01:33:08.494Z",
    "updated_at": "2018-03-21T01:33:08.494Z",
    memorized: true,
    isEdit: false
}, {
    "id": 40,
    "quantity": 5,
    "vn": "Dying of the Light",
    "en": "It does not do to dwell on dreams and forget to live.",
    "created_at": "2018-03-21T01:33:08.517Z",
    "updated_at": "2018-03-21T01:33:08.517Z",
    memorized: true,
    isEdit: false
}, {
    "id": 41,
    "quantity": 5,
    "vn": "That Hideous Strength",
    "en": "Words are in my not-so-humble opinion, the most inexhaustible form of magic we have, capable both of inflicting injury and remedying it.",
    "created_at": "2018-03-21T01:33:08.529Z",
    "updated_at": "2018-03-21T01:33:08.529Z",
    memorized: true,
    isEdit: false
}, {
    "id": 42,
    "quantity": 2,
    "vn": "In Dubious Battle",
    "en": "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
    "created_at": "2018-03-21T01:33:08.555Z",
    "updated_at": "2018-03-21T01:33:08.555Z",
    memorized: true,
    isEdit: false
}, {
    "id": 43,
    "quantity": 7,
    "vn": "Arms and the Man",
    "en": "It’s wingardium leviOsa, not leviosAH.",
    "created_at": "2018-03-21T01:33:08.571Z",
    "updated_at": "2018-03-21T01:33:08.571Z",
    memorized: true,
    isEdit: false
}, {
    "id": 44,
    "quantity": 5,
    "vn": "Consider the Lilies",
    "en": "Happiness can be found even in the darkest of times if only one remembers to turn on the light.",
    "created_at": "2018-03-21T01:33:08.587Z",
    "updated_at": "2018-03-21T01:33:08.587Z",
    memorized: true,
    isEdit: false
}, {
    "id": 45,
    "quantity": 5,
    "vn": "The Moon by Night",
    "en": "We could all have been killed - or worse, expelled.",
    "created_at": "2018-03-21T01:33:08.603Z",
    "updated_at": "2018-03-21T01:33:08.603Z",
    memorized: true,
    isEdit: false
}, {
    "id": 1,
    "quantity": 1,
    "vn": "Mother Night",
    "en": "It does not do to dwell on dreams and forget to live.",
    "created_at": "2018-03-21T01:33:07.980Z",
    "updated_at": "2018-03-21T03:21:02.315Z",
    memorized: true,
    isEdit: false
}, {
    "id": 3,
    "quantity": 3,
    "vn": "East of Eden",
    "en": "It is the unknown we fear when we look upon death and darkness, nothing more.",
    "created_at": "2018-03-21T01:33:08.023Z",
    "updated_at": "2018-03-21T03:21:49.291Z",
    memorized: true,
    isEdit: false
}, {
    "id": 4,
    "quantity": 7,
    "vn": "The Curious Incident of the Dog in the Night-Time",
    "en": "I solemnly swear I am up to no good.",
    "created_at": "2018-03-21T01:33:08.040Z",
    "updated_at": "2018-03-21T03:22:08.120Z",
    memorized: true,
    isEdit: false
}, {
    "id": 46,
    "quantity": 8,
    "vn": "A Scanner Darkly",
    "en": "It is the unknown we fear when we look upon death and darkness, nothing more.",
    "created_at": "2018-03-21T01:33:08.621Z",
    "updated_at": "2018-03-21T01:33:08.621Z",
    memorized: true,
    isEdit: false
}, {
    "id": 47,
    "quantity": 8,
    "vn": "Unweaving the Rainbow",
    "en": "We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.",
    "created_at": "2018-03-21T01:33:08.647Z",
    "updated_at": "2018-03-21T01:33:08.647Z",
    memorized: true,
    isEdit: false
}, {
    "id": 48,
    "quantity": 10,
    "vn": "Wildfire at Midnight",
    "en": "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    "created_at": "2018-03-21T01:33:08.661Z",
    "updated_at": "2018-03-21T01:33:08.661Z",
    memorized: true,
    isEdit: false
}, {
    "id": 49,
    "quantity": 1,
    "vn": "Françoise Sagan",
    "en": "We could all have been killed - or worse, expelled.",
    "created_at": "2018-03-21T01:33:08.668Z",
    "updated_at": "2018-03-21T01:33:08.668Z",
    memorized: true,
    isEdit: false
}, {
    "id": 50,
    "quantity": 5,
    "vn": "Those Barren Leaves, Thrones, Dominations",
    "en": "Just because you have the emotional range of a teaspoon doesn’t mean we all have.",
    "created_at": "2018-03-21T01:33:08.675Z",
    "updated_at": "2018-03-21T01:33:08.675Z",
    memorized: true,
    isEdit: false
}, {
    "id": 16,
    "quantity": 9,
    "vn": "Precious Bane",
    "en": "No story lives unless someone wants to listen. The stories we love best do live in us forever. So whether you come back by page or by the big screen, Hogwarts will always be there to welcome you home.",
    "created_at": "2018-03-21T01:33:08.195Z",
    "updated_at": "2018-03-21T03:17:59.344Z",
    memorized: true,
    isEdit: false
}];
export default function return_book() {
    return arrbook;
}