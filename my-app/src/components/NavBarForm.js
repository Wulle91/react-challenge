import React from 'react'

function NavBarForm() {
  return (
    <div>
        <form>
            <label for="username">Username</label>
            <input placeholder="username" name="username"/>
            <label for="Password">Password</label>
            <input placeholder="password" name="Password"/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default NavBarForm