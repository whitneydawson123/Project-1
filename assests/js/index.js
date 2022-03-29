const startBtn = document.querySelector('.startBtn');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const saveBtn = document.querySelector('.saveBtn');

startBtn.addEventListener('click', function() {
fetch("https://api.giphy.com/v1/gifs/trending?api_key=KChe4qzd9Xd1TZFVoU9FOT6zVWPIj8I2&limit=25&rating=pg-13")
	.then(response => response.json())
	.then(response => {
        let i = 0;
        document.getElementById('card').src = response.data[i].images.original.url;
        
        nextBtn.addEventListener('click', function() {
            document.getElementById('card').src = response.data[i++].images.original.url;
        });

        prevBtn.addEventListener('click', function() {
            document.getElementById('card').src = response.data[i--].images.original.url;
        });

        saveBtn.addEventListener('click', function() {
            localStorage.setItem('image', response.data[i].images.original.url);
            console.log(localStorage);        
        })

        console.log(response);
    })
	.catch(err => console.error(err));
})