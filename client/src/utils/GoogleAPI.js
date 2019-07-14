import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&key=AIzaSyCIL_DZtkJLK1I_hE6gvuIBZCQKJxNE-To";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};