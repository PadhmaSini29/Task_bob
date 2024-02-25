import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4126684/pexels-photo-4126684.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span>Preethi</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>cancel</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span>Ram</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>cancel</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1580272/pexels-photo-1580272.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                <span>Devi</span> changed their profile picture
              </p>
            </div>
            <span>5 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                <span>Dhivya</span> Gained 500 followers
              </p>
            </div>
            <span>8 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1416170/pexels-photo-1416170.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                <span>Swaminadhan</span> Tagged you in a post
              </p>
            </div>
            <span>15 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                <span>Vimal</span> Shared his vacation pictrues 
              </p>
            </div>
            <span>30 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/7849958/pexels-photo-7849958.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Jai</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/7580984/pexels-photo-7580984.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Surya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Hari</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2085739/pexels-photo-2085739.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Prakash</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2590287/pexels-photo-2590287.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Arjun</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/15344873/pexels-photo-15344873/free-photo-of-woman-wearing-traditional-dress-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Abinaya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/12995512/pexels-photo-12995512.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""

              />
              <div className="online" />
              <span>Yamini</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/11284041/pexels-photo-11284041.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Vimal</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5119617/pexels-photo-5119617.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Sara</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/7856762/pexels-photo-7856762.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Kanmani</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/14064728/pexels-photo-14064728.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Raji</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
