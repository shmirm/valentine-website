document.addEventListener('DOMContentLoaded', function () {
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');
    
    yesBtn.addEventListener('click', function () {
        alert("Wrong answer >:(");
        document.body.style.backgroundColor = '#8b0000'; // Dark red background
    });
    
    noBtn.addEventListener('click', function () {
        document.querySelector('.container').innerHTML = `
            <h1>Will You Be My Valentine?</h1>
            <div class="button-container">
                <button class="yes-celebration">Yes</button>
                <button class="yes-celebration">Yes x2</button>
            </div>
        `;
    });

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('yes-celebration')) {
            document.body.innerHTML = `
                <div class="celebration">
                    <h2>YIPPIE!!! MWAH MWAH MWAH MY BREEZY <3 <3 <3 <3</h2>
                </div>
            `;
        }
    });
});
