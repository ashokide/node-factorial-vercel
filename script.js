function getFact(num) {
    axios.get(`https://nodefactorial.vercel.app/factorial/${num}`, { crossdomain: true })
        .then((result) => {
            alert(`result :${result.data.result}`);
        }).catch((error) => {
            alert(error);
        });
}
function submitted(){
    let num = document.getElementById('num').value
    if (num >= 0) {
        getFact(num);
    }
    else {
        alert('invalid number')
    }
    
}
