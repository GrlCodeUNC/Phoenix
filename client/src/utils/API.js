import axios from "axios";

export default {

  // Gets all activity
  getAllActivities: function() {
    return axios.get("/api/activity");
  },
  // Gets the Activity with the given id
  getActivity: function(id) {
    return axios.get("/api/activity/" + id);
  },
  // Gets the Activities associated with emails
  getActivityEmail: function(user) {
    console.log(user);
    return axios.get("/api/activity/" + user);
  },
  // Deletes the Activity with the given id
  deleteActivity: function(id) {
    return axios.delete("/api/activity/" + id);
  },
  // Saves a Activity to the database
  saveActivity: function(activityData) {
    return axios.post("/api/activity", activityData);
  }
};
