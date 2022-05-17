let myDiscoveries = `["www.mapcrunch.com"]`


// discoveriesFromLocalStorage = JSON.parse(myDiscoveries)
// discoveriesFromLocalStorage.push("www.newdiscovery.com")
// discoveriesFromLocalStorage = JSON.stringify(myDiscoveries)
// console.log(typeof myDiscoveries)


const inputElement = document.getElementById("input-element")
const inputButton = document.getElementById("input-button")
const unorderedListElement = document.getElementById("unordered-list-element")

localStorage.setItem("myDiscoveries", "Marcella")
console.log( localStorage.getItem("myDiscoveries"))

inputButton.addEventListener("click", function() {
    myDiscoveries.push(inputElement.value)
    inputElement.value = ""
    display()
})

function display() {
    let listItems = ""
    for (let i = 0; i < myDiscoveries.length; i++) {

        listItems += `
          <li>
		        <a target='_blank' href='${myDiscoveries[i]}'>
			        ${myDiscoveries[i]}
		        </a>
	        </li>
`


        console.log(listItems)
    }
    unorderedListElement.innerHTML = listItems
}

