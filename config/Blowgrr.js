import demoPosts from './demoPosts.json'; 

// THE GHOST API:
class Blowgrr {
    constructor(url, version, key){
        this.server_url = url
        this.api_version = version
        this.public_key = key
        this.posts_ep = `${this.server_url}/ghost/api/v${this.api_version}/content/posts`
    }

    async getPosts() {
        try {
            return demoPosts
        } catch (error) {
            console.log("GET_POSTS_ERROR", error)
        }
    }

    async getPost( post_id ) {
        try {
            const posts = demoPosts.posts.filter( post => post.id == post_id)   
            return { posts }
        } catch (error) {
            console.log("GET_POST_BY_ID_ERROR", error)
        }
    }

    async getPostBySlug( post_slug ) {
        try {
            const posts = demoPosts.posts.filter( post => post.slug == post_slug)   
            return { posts }
        } catch (error) {
            console.log("GET_POST_BY_SLUG_ERROR", error)
        }
    }
}

export default Blowgrr;