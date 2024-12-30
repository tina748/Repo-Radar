const APIURL = "https://api.github.com/users/"; // Github User Profile API

const getUser = async (username) => {
    const response = await fetch(APIURL + username);  // Fetch data from api
    const data = await response.json();
    console.log(data);

    const card = `<div class="profile flex">
        <div class="profile-img flex">
            <img src="${data.avatar_url}" alt="profile">
        </div>
        <div class="profile-detail">
            <h1>${data.name}</h1>
            <span>@${data.login}</span>
            <p>Joined ${data.created_at}</p>
        </div>
    </div>

    <div class="bio">
        <span>${data.bio}</span>
    </div>

    <div class="repositry flex">
        <div class="repos flex fl-col">
            <h3>Repos</h3>
            <span>${data.public_repos}</span>
        </div>
        <div class="followers flex fl-col">
            <h3>Followers</h3>
            <span>${data.followers}</span>
        </div>
        <div class="following flex fl-col">
            <h3>Following</h3>
            <span>${data.following}</span>
        </div>
    </div>
    <div class="personal-info flex">
        <div class="loaction">
            <i class="fa-solid fa-location-dot"></i>
            <span>${data.location}</span>
        </div>
        <div class="link">
            <i class="fa-solid fa-building"></i>
            <span>${data.company}</span>
        </div>
    </div>`;

    document.querySelector(".card-content").innerHTML = card; // append card in html file..
}

const input = document.getElementById("input"); // Take Input From Input-Feild

input.addEventListener(
    'keyup', (e) => {
        if (e.key === "Enter" && input.value === "") {
            alert("Please Write the Username..")
        }
        else if (e.key === "Enter") {

            getUser(input.value);
            input.value = "";
        }
    }

)

getUser("Sudhanshusingh003"); //  Function Call


//theme

const theme = document.querySelector(".theme");

theme.addEventListener(
    'click', () => {
        document.querySelector("body").classList.toggle("dark");
        let theme_text = document.getElementById("text");

        if (theme_text.innerText === "Dark") {
            theme_text.innerText = "Light";
            document.getElementById("logo").className = "fa-regular fa-sun";
        }
        else {
            theme_text.innerText = "Dark"
            document.getElementById("logo").className = "fa-sharp fa-solid fa-moon";
        }
    }
)
