import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import './profile.css'
import { useNavigate } from 'react-router-dom';
import { logout, selectCurrentUser,  } from '../../Redux/Features/Auth/authSlice';

const Profile = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const loggedInUser = useAppSelector(selectCurrentUser);

  

  
    const handleLogOut = () => {
      dispatch(logout());
      toast.success("Logged out successfully!");
      navigate("/login");
    };
    return (
        <div className='flex justify-center'>
         <div className="profile-card lg:max-w-4xl md:max-w-xl max-w-sm my-10">
  <div className="image">
    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="profile-img" />
  </div>
  <div className="text-data">
    <span className="name">{loggedInUser?.name}</span>
    <span className="job">{loggedInUser?.email}</span>
  </div>
  
  <div className="buttons">
    <button  onClick={handleLogOut} className="button">Sign Out</button>
 
  </div>

</div>

        </div>
    );
};

export default Profile;