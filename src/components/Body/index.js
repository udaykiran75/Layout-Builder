import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1 className="heading">Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : (
            ''
          )}
          {showContent ? (
            <div className="content-container">
              <h1 className="heading">Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididut ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : (
            ''
          )}
          {showRightNavbar ? (
            <div className="right-navbar">
              <h1 className="heading">Right Navbar</h1>
              <button type="button">Ad 1</button>
              <button type="button">Ad 2</button>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
