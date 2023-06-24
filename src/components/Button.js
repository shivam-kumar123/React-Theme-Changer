import React from 'react'

function Button({setTheme}) {

    const handleTheme = () => {
        setTheme((prev) => {
            return prev ^ 1
        })
    }

  return (
    <div>
        <button onClick={handleTheme}>Change Theme</button>
    </div>
  )
}

export default Button