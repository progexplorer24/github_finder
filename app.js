// Search Input
const searchInput = document.getElementById("searchUser");

const github = new GitHub();

const ui = new UI();

searchInput.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        //   Show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //   Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //   Clear the profile
    ui.clearProfile();
  }
});
