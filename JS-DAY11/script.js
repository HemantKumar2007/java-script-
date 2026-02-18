function login(email, password, callback) {
    setTimeout(() => {
        callback({ userid: email,isloggedin: true , message: "Login successful"});
    }, 2000);
 
};
 function getvideos(callback) {
    setTimeout(() => {
        callback(["video1", "video2", "video3"]);
    }, 2000);
}
login("user@example.com", "password123", (userdetails) => {
    console.log(userdetails);
    getvideos((videos) => {
        console.log(videos);
    });
});