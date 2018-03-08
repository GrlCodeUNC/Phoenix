// use this for react app / client side
import axios from "axios";

export default {

    // Gets all image thumbnails
    getAllImages: function(keyword) {

        console.log(`keyword = ${keyword}`);

        // how do we keep this info hidden from heroku source upload and it still work??
        const apiHeaderInfo = {
            'Api-key': "6ejs6h4b5998mdg4y8twbeh4"
        };

        // URL needed to grab images w/ the keyword search attached from getty images
        const queryURL = `https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=${keyword}`;

        return axios.get(queryURL, {headers: apiHeaderInfo});
    },

}

// example of API response that comes back from getty images

// entire response.data view 
// should check to see if the response has a result_count more than 0
// then loop through the data for the # of pics we would like to display on the activity form page
// grab the URIs

// data:
// { result_count: 5343,
//   images:
//    [ [Object],
//      [Object],
//      [Object],
//      [Object],
//      [Object],
//      [Object],
//      [Object],
//      [Object],
//      [Object],
//      [Object],
//      [Object],
//      [Object],
//      [Object],
//      [Object] ] } }

// { id: '865835916',
//   display_sizes:
//    [ { is_watermarked: false,
//        name: 'thumb',
//        uri: 'https://media.gettyimages.com/photos/an-old-lady-practicing-skydiving-picture-id865835916?b=1&k=6&m=865835916&s=170x170&h=d2Yl78RQYdA9CQJsCV_QrXpXocP9SofQwSiPueap7WE=' } ],
//   referral_destinations:
//    [ { site_name: 'gettyimages',
//        uri: 'http://www.gettyimages.com/detail/photo/an-old-lady-practicing-skydiving-royalty-free-image/865835916' } ],
//   title: 'An old lady practicing skydiving' }

