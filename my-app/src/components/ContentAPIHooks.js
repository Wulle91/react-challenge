import React, { Component, useState, useEffect } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import API_KEY from "../secrets";
import axios from 'axios'

function ContentAPIHooks() {
    const [isLoaded, addLoading] = useState(false)
    const [posts, addPosts] = useState([])
    const [savedPosts, addSavedPosts] = useState([])
    const [error, addError] = useState(null)

    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&pretty=true`)
        .then(response => {
            addLoading(true),
            addPosts(response.data.hits),
            addSavedPosts(response.data.hits)
        }).catch(error => {
            addError(error.message)
        })
    }, [])
    const handleNames = (event) => {
        let inputText = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter(post => {
            return post.user.toLowerCase().includes(inputText)
        })
        addPosts(filteredPosts)
    }
  return (
    <div className={css.Content}>
                
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
                <label htmlFor="searchInput">Search:</label>
                <input onChange={(event) => handleNames(event)} type="text" id="searchInput"/>
                <h4>posts found: {posts.length}</h4>
            </form>
        </div>

        <div className={css.SearchResults}>
            {
                isLoaded ?
                <PostItemAPI savedPosts={posts} />
                : <Loader />
            }
        </div>
    </div>
  )
}

export default ContentAPIHooks