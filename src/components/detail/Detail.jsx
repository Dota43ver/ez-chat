import "./detail.css"

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">  
                <img src="https://media.istockphoto.com/id/1793397465/es/foto/de-remo.jpg?s=2048x2048&w=is&k=20&c=JaPmzn5BtA0Wu2Zj0aDP672lu6e9jjWTkTIks2ZYOpM=" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">  
                <img src="https://media.istockphoto.com/id/1793397465/es/foto/de-remo.jpg?s=2048x2048&w=is&k=20&c=JaPmzn5BtA0Wu2Zj0aDP672lu6e9jjWTkTIks2ZYOpM=" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">  
                <img src="https://media.istockphoto.com/id/1793397465/es/foto/de-remo.jpg?s=2048x2048&w=is&k=20&c=JaPmzn5BtA0Wu2Zj0aDP672lu6e9jjWTkTIks2ZYOpM=" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">  
                <img src="https://media.istockphoto.com/id/1793397465/es/foto/de-remo.jpg?s=2048x2048&w=is&k=20&c=JaPmzn5BtA0Wu2Zj0aDP672lu6e9jjWTkTIks2ZYOpM=" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  )
}

export default Detail