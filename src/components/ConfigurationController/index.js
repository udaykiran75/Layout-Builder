import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const toggleShowContent = () => {
        onToggleShowContent()
      }

      const toggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const toggleShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="controller-container">
          <h1 className="Layout-heading">Layout</h1>
          <div className="input-div">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={toggleShowContent}
            />
            <label htmlFor="content" className="checkbox-label">
              Content
            </label>
          </div>
          <div className="input-div">
            <input
              type="checkbox"
              id="leftNavbar"
              checked={showLeftNavbar}
              onChange={toggleShowLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="checkbox-label">
              Left Navbar
            </label>
          </div>
          <div className="input-div">
            <input
              type="checkbox"
              id="rightNavbar"
              checked={showRightNavbar}
              onChange={toggleShowRightNavbar}
            />
            <label htmlFor="rightNavbar" className="checkbox-label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
