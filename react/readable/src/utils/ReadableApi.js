const api = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  headers: {
  //
  // 'Authorization': token
    'Authorization': token
  },
  
}

class API {  
  static getAllCategories() {
    return fetch(`${api}/categories`, headers).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getAllPosts() {
    return fetch(`${api}/posts`, headers).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }

  static getPostsByCategory(category) {
    return fetch(`${api}/${category}/posts`, headers).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }
}

export default API;  
    
// export const getCategoryPosts = (category) => 
//   fetch(`${api}/:${category}/posts`, headers)
//     .then(res => res.json())
//     .then(data => data.posts)

// export const getAllPosts = () => 
//   fetch(`${api}/posts`, headers)
//     .then(res => res.json())
//     .then(data => data.posts)


// `
//     Use an Authorization header to work with your own data:
    
//         fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})
    
//         The following endpoints are available:
    
//         GET /categories
//           USAGE: 
//             Get all of the categories available for the app. List is found in categories.js.
//             Feel free to extend this list as you desire.
        
//         GET /:category/posts
//           USAGE:
//             Get all of the posts for a particular category
    
//         GET /posts
//           USAGE:
//             Get all of the posts. Useful for the main page when no category is selected.
        
//         POST /posts
//           USAGE:
//             Add a new post
          
//           PARAMS: 
//             id - UUID should be fine, but any unique id will work
//             timestamp - timestamp in whatever format you like, you can use Date.now() if you like
//             title - String
//             body - String
//             author - String
//             category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
    
//         GET /posts/:id
//           USAGE:
//             Get the details of a single post
    
//         POST /posts/:id
//           USAGE:
//             Used for voting on a post
//           PARAMS:
//             option - String: Either "upVote" or "downVote"
            
//         PUT /posts/:id
//           USAGE:
//             Edit the details of an existing post
//           PARAMS:
//             title - String
//             body - String
    
//         DELETE /posts/:id
//           USAGE:
//             Sets the deleted flag for a post to 'true'. 
//             Sets the parentDeleted flag for all child comments to 'true'.
          
//         GET /posts/:id/comments
//           USAGE:
//             Get all the comments for a single post
        
//         POST /comments
//           USAGE:
//             Add a comment to a post
    
//           PARAMS:
//             id: Any unique ID. As with posts, UUID is probably the best here.
//             timestamp: timestamp. Get this however you want.
//             body: String
//             author: String
//             parentId: Should match a post id in the database.
    
//         GET /comments/:id
//           USAGE:
//             Get the details for a single comment
    
//         POST /comments/:id
//           USAGE:
//             Used for voting on a comment.
    
//         PUT /comments/:id
//           USAGE:
//             Edit the details of an existing comment
         
//           PARAMS:
//             timestamp: timestamp. Get this however you want.
//             body: String
    
//         DELETE /comments/:id
//           USAGE:
//             Sets a comment's deleted flag to 'true'
// `