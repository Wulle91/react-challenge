import React, { Component, useState, useEffect } from "react";
import css from "./css/Content.module.css";
import API_KEY from "../secrets";
import PostItem from "./PostItem";
import Loader from "./Loader";
import axios from 'axios'

function ContentHook() {
    const [isLoaded, loading] = useState(false)
    const [fetchedPosts, fetchingPosts ] = useState([])

    useEffect(() => {
        setTimeout(() => {
            loading(isLoaded => true, fetchedPosts => savedPosts)
        }, 2000);
    }, [])

    const handleNames = (event) => {
        let inputText = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter(fetchedPosts => {
            return fetchedPosts.name.toLowerCase().includes(inputText)
        })
        fetchingPosts(filteredPosts)
    }
    
  return (
    <div className={css.Content}>
                
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
                <label htmlFor="searchInput">Search:</label>
                <input onChange={handleNames} type="text" id="searchInput"/>
                <h4>posts found: {fetchedPosts.length}</h4>
            </form>
        </div>

        <div className={css.SearchResults}>
            {
                isLoaded ?
                <PostItem savedPosts={savedPosts} />
                : <Loader />
            }
        </div>
    </div>
  )
}

export default ContentHook