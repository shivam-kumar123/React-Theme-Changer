import React from 'react'

function Button({setTheme}) {

    const handleTheme = () => {
        setTheme((prev) => {
            return prev ^ 1
        })
    }

  return (
    <div>
        {/* <button onClick={handleTheme}>Change Theme</button> */}
        <label>
          <input onClick={handleTheme} type="checkbox" class="slider" />
          <div class="switch">
              <div class="suns"></div>
              <div class="moons">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                  <div class="first-moon"></div>
              </div>
              <div class="sand"></div>
              <div class="bb8">
                  <div class="antennas">
                      <div class="antenna short"></div>
                      <div class="antenna long"></div>
                  </div>
                  <div class="head">
                      <div class="stripe one"></div>
                      <div class="stripe two"></div>
                      <div class="eyes">
                          <div class="eye one"></div>
                          <div class="eye two"></div>
                      </div>
                      <div class="stripe detail">
                          <div class="detail zero"></div>
                          <div class="detail zero"></div>
                          <div class="detail one"></div>
                          <div class="detail two"></div>
                          <div class="detail three"></div>
                          <div class="detail four"></div>
                          <div class="detail five"></div>
                          <div class="detail five"></div>
                      </div>
                      <div class="stripe three"></div>
                  </div>
                  <div class="ball">
                      <div class="lines one"></div>
                      <div class="lines two"></div>
                      <div class="ring one"></div>
                      <div class="ring two"></div>
                      <div class="ring three"></div>
                  </div>
                  <div class="shadow"></div>
              </div>
          </div>
      </label>
    </div>
  )
}

export default Button