import React from 'react';

import axios from 'axios';
axios.defaults.baseURL = 'https://api.unsplash.com';

//  client_id=L8gl-NSA6WgM_hr7Eskh6cG-VL4XlvL29DTZBgzk6gQ

export const fetchPhotos = async (photos, page) => {
  const axiosOptions = {
    params: {
      page: page,
      per_page: 12,
      query: photos,
      orientation: 'landscape',
      per_page: 12,
      client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
    },
  };

  const response = await axios.get('/search/photos', axiosOptions);
  console.log(response.data);
  return response.data;
};

// import axios from 'axios';

// axios.defaults.baseURL = 'https://api.unsplash.com';

// export const fetchPhotos = (searchedQuery, page) => {
//   const axiosOptions = {
//     params: {
//       query: searchedQuery,
//       orientation: 'portrait',
//       page: page,
//       per_page: 20,
//       client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
//     },
//   };

//   return axios.get(`/search/photos`, axiosOptions);
// };
