import React, { useContext } from 'react';
import Container from '../Components/Container/Container';
import { AuthContext } from '../AuthContext/AuthContext';
import { FaPencilAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const handleUpdateProfile = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    updateUserProfile(user, name, photoURL)
      .then(res => {
        toast.success('Profile updated successfully!');
        e.target.reset();
      })
      .catch(err => {
        toast.error('Failed to update profile');
      });
  };

  return (
    <>
      <Container className="py-10">
        <section className="max-w-5xl mx-auto px-4 flex lg:items-start items-center flex-col lg:flex-row gap-8">
          <aside className="w-[280px] rounded-[40px] p-2 shadow-lg">
            <div>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt=""
                  className="rounded-[32px] w-[264px] h-[280px]"
                />
              ) : (
                <div className="skeleton rounded-[32px] w-[264px] h-[280px]"></div>
              )}
            </div>

            <div className="py-5 px-6">
              <h2 className="text-[18px] font-semibold text-center">
                {user.displayName}
              </h2>
              <p className="text-[#767676] text-sm text-center">{user.email}</p>
            </div>
          </aside>

          <div className="flex-1 py-5">
            <h2 className="text-xl font-semibold pb-3 border-b-2 border-gray-300 flex items-center gap-2">
              <FaPencilAlt /> Edit Profile
            </h2>

            <form onSubmit={handleUpdateProfile}>
              <fieldset className="fieldset mt-4">
                <legend className="fieldset-legend text-sm">Your Name</legend>
                <input
                  name="name"
                  required
                  type="text"
                  className="input outline-0 mb-1"
                  placeholder="Type here"
                />

                <legend className="fieldset-legend text-sm">Photo URL</legend>
                <input
                  name="photoURL"
                  required
                  type="text"
                  className="input outline-0"
                  placeholder="Enter your photo url..."
                />

                <input
                  className="btn w-xs mt-4 rounded-full bg-black font-medium text-white"
                  type="submit"
                  value="Update"
                />
              </fieldset>
            </form>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Profile;
