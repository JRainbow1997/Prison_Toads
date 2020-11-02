import React from 'react';
import './Post.css';
import Post from './Post';
class Posts extends React.Component {
    state = {
        persons: [
            { userAvatatImg: "https://magedalqerbi.cachefly.net/p/20009/9.webp", userNickname: "Kermit", postImage: "https://cdn131.picsart.com/318968072360201.jpg?type=webp&to=crop&r=256", postCaption: "Get it girl", postHashtag: ["#pride", "#love", "#frogscanlovetoads"] },
            { userAvatatImg: "https://ih1.redbubble.net/image.895719850.7979/flat,128x128,075,f-pad,128x128,f8f8f8.jpg", userNickname: "Mr. toad", postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3dVHgh3Z3jFn2t4r-C-i5joGPsR_uiino-w&usqp=CAU", postCaption: "Fresh Trim", postHashtag: ["#freshtrim", "#outofjail", "#getmeadrink"] },
            { userAvatatImg: "https://pm1.narvii.com/7042/815f32473e27fa0f93bd12e97d532f2912fed7d5r1-1024-815v2_128.jpg", userNickname: "Princess Tiana", postImage: "https://c-sf.smule.com/rs-s-sf-4/arr/11/cc/63e50696-2b2a-43d2-8ad6-2cb32cc0f02c.jpg", postCaption: "Biggest mistake of my life", postHashtag: ["#menaretheworst", "#dontfallforafrog"] }
        ]
    }
    render() {
        const allPosts = this.state.persons.map((post) => {
            return (
                <Post
                    userAvatatImg={post.userAvatatImg} userNickname={post.userNickname} postImage={post.postImage} postCaption={post.postCaption} postHashtag={post.postHashtag}
                />
            )
        });
        return (
            <div>
                {allPosts}
            </div>
        );
    }
}
export default Posts;