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
      return id
    }).catch(error => {
      return error;
    })
  }

  static getCommentsByPostId(id) {
    return fetch(`${api}/posts/${id}/comments`, {
      ...headers,
      method: 'GET'
    }).then(response => {
      return response.json()
    }).catch(error => {
      return error;
    })
  }

  static addComment(comment) {
    return fetch(`${api}/comments`, {
      ...headers,
      method: 'POST',
      body: JSON.stringify(comment)
    }).then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static getCommentByCommentId(id) {
    return fetch(`${api}/comments/${id}`, {
      ...headers,
      method: 'GET'
    }).then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static upVoteCommentByCommentId(id) {
    return fetch(`${api}/comments/${id}`, {
      ...headers,
      method: 'POST',
      body: JSON.stringify({option: "upVote"})
    }).then(response => {
      return response.json()
    }).catch(error => {
      return error;
    })
  }

  static downVoteCommentByCommentId(id) {
    return fetch(`${api}/comments/${id}`, {
      ...headers,
      method: 'POST',
      body: JSON.stringify({option: "downVote"})
    }).then(response => {
      return response.json()
    }).catch(error => {
      return error;
    })
  }

  static editCommentByCommentId(comment) {
    return fetch(`${api}/comments/${comment.id}`, {
      ...headers,
      method: 'PUT',
      body: JSON.stringify({timestamp: comment.timestamp, body:comment.body})
    }).then(response => {
      return response.json()
    }).catch(error => {
      return error;
    })
  }

  static deleteCommentByCommentId(id) {
    return fetch(`${api}/comments/${id}`, {
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