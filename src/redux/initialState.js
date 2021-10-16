const initialState = {
    notes:[
        {name:"Shopping list", created:"2021-04-05", category:0, content:"Tomatoes, bread", dates:"", archived:false},
        {name:"The theory of evolution", created:"2021-04-27", category:1, content:"The evolution ", dates:"", archived:false},
        {name:"New Feature", created:"2021-05-05", category:2, content:"Implement new feattures till 3/5/2021. Control review 5/5/2021", dates:"3/5/2021, 5/5/2021", archived:false},
        {name:"William Gaddis", created:"2021-05-07", category:3, content:"Power doesn't corrupt people; people corrupt power", dates:"", archived:false},
        {name:"Books", created:"2021-05-15", category:0, content:"The Lean Startup", dates:"", archived:false},
        {name:"Dentist appointment", created:"2021-05-01", category:0, content:"I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021", dates:"3/5/2021, 5/5/2021", archived:true},
        {name:"Minority Report", created:"2021-06-06", category:1, content:"Bla bla bla", dates:"", archived:true}
    ],
    isNoteEditing: false,
    editingNoteIndex: null
}
export default initialState