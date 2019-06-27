import React from 'react';

function Posts ({ posts }) {
    if (posts.length == 0) {
        return (
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )
    } else {
        return (
            //[ <p>test</p>,
            //{ posts.map((pt, i) => <p></p>) } ]
            /*<ul>
                posts.map((post) => (
                <li key={post.id}>{post.body}</li> )
            </ul>*/
            <ul class="list-group">
                { posts.map((p) => 
                    <li class="list-group-item" key={p.id}>
                        {p.id}. {p.body}
                    </li>) }
            </ul>
        )
    }
}

export default Posts;