import logo from './logo.svg';
import './App.css';
import ProfileComponent from "./profile/ProfileComponent";
import  PropTypes from 'prop-types'



const App = () => {
  const styleObject = {
    color: "black",
    textAlign: "center",
    fontSize: "120%",
  };

  const handleName = (name) => {
    alert(`Hello, I'm Karima Sassi`);
  };
  return (
    <div style={styleObject}>
      <ProfileComponent
        FullName="Karima Sassi"
        bio=" I'm  a student at GOMYCODE "
        profession="Student"
        className="bio"
        image=".jpg"
        className="image"
        handleName={handleName}
      />
    </div>
  );
};

ProfileComponent.defaultProps = {
  FullName: "uncknown",
  image:
    "https://cdn1.vectorstock.com/i/thumb-large/45/70/female-avatar-profile-picture-silhouette-light-vector-4684570.jpg",
};
ProfileComponent.PropTypes = {
  FullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  image: PropTypes.string,
};
export default App;