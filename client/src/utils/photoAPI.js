// use this for react app / client side
import axios from "axios";

export default {
  // Gets all image thumbnails
  getAllImages: function(keyword) {
    // how do we keep this info hidden from heroku source upload and it still work??
    const apiHeaderInfo = {
      "Api-key": "6ejs6h4b5998mdg4y8twbeh4"
    };

    // URL needed to grab images w/ the keyword search attached from getty images
    const queryURL = `https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=${keyword}`;

    return axios.get(queryURL, { headers: apiHeaderInfo });
  }
};
