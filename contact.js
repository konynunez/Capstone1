let = storeLocations = [
  {
    "storeManager": "Jane Ruiz",
    "storeLocation": "122 main st, 22574 California CA",
    "phoneNumber": "(999)555-555",
  },
  {
    "storeManager": "Mark Grants",
    "storeLocation":"5888 Peacok Dr 88786, Las Vegas NV",
    "phoneNumber": "(333)555-7777",
  },
  {
    "storeManager": "Bill Prats",
    "storeLocation":"698 Clemmons st Suite 12B, 12074 New York, NY",
    "phoneNumber": "(555)589-9665",
  },
  {
    "storeManager": "Tom Hanks",
    "storeLocation":"333 Jackson Blvd #289 58574, Washington WA",
    "phoneNumber": "(986)354-5786",
  },
  {
    "storeManager": "Terrance Wild",
    "storeLocation":"3984 New Heaven st 35586, Florida FL",
    "phoneNumber": "(303)569-5875",
  }
];

const mylocation = document.getElementById("my-location");
function createCards(){
  let myLocationContent = "";
  for (let i = 0; i < storeLocations.length; i++) {
    myLocationContent = myLocationContent + `
    <div class="card" sm-3">
      <div class="card-header">${storeLocations[i].storeManager}</div>
        <div class="card-body"> Store 
        location ${storeLocations[i].storeLocation} Store State
        <div class="card-t">${storeLocations[i].phoneNumber}</p>
      </div>
    </div>
    `
  }
  mylocation.innerHTML = myLocationContent;
}
createCards();


let storeTime = ["Monday: 6am - 9pm", "Tuesday: 6am - 9pm", "Wednesday: 6am - 9pm", "Thursday: 6am - 9pm", "Friday: 6am - 9pm", "Saturday: 6am - 9pm"];

const uList = document.querySelector("ul");
console.log(uList);
const btncreateList = document.getElementById("createList");
btncreateList.addEventListener("click", function(){
  for (let i = 0; i < storeTime.length; i++) {
    let storeHours = document.createElement("li");
    storeHours.textContent = storeTime[i];
    uList.appendChild(storeHours);
  }
});
