const api = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  headers: {
  //
  // 'Authorization': token
    'Accept': 'application/json',
    'Authorization': token,
    'Content-Type': 'application/json'
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

  static addNewPost(post) {
    return fetch(`${api}/posts`, {
      ...headers,
      method: 'POST',
      body: JSON.stringify(post)
    }).then(response => {
      return response.json()
    }).catch(error => {
      return error;
    })
  }

  static getPostById(id) {
    return fetch(`${api}/posts/${id}`, {
      ...headers,
      method: 'GET'
    }).then(response => {
      return response.json()
    }).catch(error => {
      return error;
    })
  }

  static editPost(post) {
    return fetch(`${api}/posts/${post.id}`, {
      ...headers,
      method: 'PUT',
      body: JSON.stringify({title: post.title, body: post.body})
    }).then(response => {
      return response.json()
    }).catch(error => {
      return error;
    })
  }

  static upVotePostById(id) {
    return fetch(`${api}/posts/${id}`, {
      ...headers,
      method: 'POST',
      body: JSON.stringify({option: "upVote"})
    }).then(response => {
      return response.json()
    }).catch(error => {
      return error;
    })
  }

  static downVotePostById(id) {
    return fetch(`${api}/posts/${id}`, {
      ...headers,
      method: 'POST',
      body: JSON.stringify({option: "downVote"})
    }).then(response => {
      return response.json()
    }).catch(error => {
      return error;
    })
  }

  static deletePostById(id) {
    return fetch(`${api}/posts/${id}`, {
      ...headers,
      method: 'DELETE'
    }).then(response => {
      return response.json()
    }).catch(error => {
      return error;
    })
  }

}

export default API;

// `
//     Use an Authorization header to work with your own data:
    
//         fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})
    
//         The following endpoints are available:

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