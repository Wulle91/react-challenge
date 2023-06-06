import React, { Component } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import API_KEY from "../secrets";
import axios from 'axios'

export class ContentAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: [],
        }
    }

    componentDidMount() {
        this.fetchImages()
    }

    async fetchImages () {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&pretty=true`);
        const fetchedPosts = response.data.hits
        console.log(fetchedPosts)
        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts,
        })
    }

    

    handleNames = (event) => {
        let inputText = event.target.value.toLowerCase()
        const filteredPosts = this.state.savedPosts.filter(post => {
            return post.user.toLowerCase().includes(inputText)
        })
        this.setState({
            posts: filteredPosts
        })
    }
    
    render() {
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="searchInput">Search:</label>
                        <input onChange={(event) => this.handleNames(event)} type="text" id="searchInput"/>
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
                </div>

                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItemAPI savedPosts={this.state.posts} />
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default ContentAPI