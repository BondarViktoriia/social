import db from "../../firebase/config";
import { authSlice } from "../auth/authSlice";

export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      await db.auth().createUserWithEmailAndPassword(email, password);
      const user = await db.auth().currentUser;
      await user.updateProfile({
        displayName: login,
      });
      const upload = await db.auth().currentUser;
      console.log(upload.uid);
      console.log(upload.displayName);
      const userUpdateProfile = {
        userId: upload.uid,
        login: upload.displayName,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
    } catch (error) {
      console.log("error.message", error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await db.auth().signInWithEmailAndPassword(email, password);
      console.log("user", user);
    } catch (error) {
      console.log("error.message", error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  await db.auth().signOut();
  dispatch(authSlice.actions.authSignOut())
};

export const authStateChangeUser = () => async (dispatch, getState) => {
  await db.auth().onAuthStateChanged((user) => {
    if (user) {
      const userUpdateProfile = {
        userId: user.uid,
        login: user.displayName,
      };
    dispatch(authSlice.actions.authStateChange( {stateChange: true} ));
    dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));

    }
  });
};
