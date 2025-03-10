function loadCatagories () {
    let url = `http://localhost:3000/categories`
    fetch(url)
    .then(res =>  res.json())
    .then((categories) => {
        let select = document.getElementById('catagories');
        let options = categories.map(catagory =>`<option value=${catagory}>${catagory}</option>`).join('\n');
        select.innerHTML = options;
    })
    .catch((err) => {
        console.error(err);
    });
}

function setCatagory() { 
    localStorage.setItem("currentCatagory", document.getElementById("catagories").value);
}

loadCatagories();
setCatagory();