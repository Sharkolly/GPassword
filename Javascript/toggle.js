const save = document.querySelector(".save");
const wrong = document.querySelector(".wrong");
const btn = document.querySelector(".enter");
const secBtn = document.querySelector(".ent");
const img = document.querySelector(".img");
const firstPass = document.querySelector(".norm");
const secPass = document.querySelector("#input");
const thirdPass = document.querySelector(".entering");
const corr = document.querySelector(".corr");
const wrap = document.querySelector(".wrap");
const entPass = document.querySelector(".enter-pass");
const show = document.querySelector(".show");

btn.addEventListener("click", function () {
    if (firstPass.value == '' || secPass.value == '') {
        wrong.style.display = 'block';
        setTimeout(() => {
            wrong.style.display = 'none';
        }, 2000);
    } else {
        if (firstPass.value == secPass.value) {
            save.style.display = 'block';
            setTimeout(() => {
                wrap.style.display = 'none';
                entPass.style.display = 'block';
            }, 2300);
            secBtn.addEventListener("click", function () {
                if (thirdPass.value == firstPass.value) {
                    show.style.display = 'block';
                    setTimeout(() => {
                        entPass.style.display = 'none';
                        setTimeout(() => {
                            img.style.display = 'block';
                        }, 2000);
                    }, 2000);
                }
                else {
                    alert("Incorrect Password");
                };
            });
        }
        else {
            corr.style.display = 'block';
        };
    }
});


