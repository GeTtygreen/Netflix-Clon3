import axios from "axios";

const instance = axios.create({
    
    base_URl: "https://api.themoviedb.org/3"
    
});

// instance.get('/foo-bar')

export default instance;