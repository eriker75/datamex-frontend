import React from 'react'

const BackgroundLogin = () => {
  return (
    <>
        {/*<!-- Background image-->*/}
        <div className="d-none d-md-block position-absolute w-50 h-100 bg-size-cover" style={{"top": "0", "right": "0", "backgroundImage": "url(img/account/signin-img.jpg)"}}></div>
    </>
  )
}

export default BackgroundLogin