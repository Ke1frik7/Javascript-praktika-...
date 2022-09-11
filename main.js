let mahsulotlar = [
    {
        image: "./Images/Website-Designa.png",
        name: "Tevevizor Lg Pestigio 43",
        cost: 1000,
        dyum: "70 > 100",
        hotira: 2,
        mobile: "qullab quvvatlaydi",
        qushimcha: "FaceBook va Instagram"
    },
    {
        image: "./Images/Holodilnik.jpg",
        name: "Muzlatgich LG Ultra",
        cost: 600,
        display: "Kup kamerali",
        turi: "Invertorli",
        ulcham: "912 x 1797 x 759",
        xladagent: "R600a"
    }
]
let textlar = [
    {
        textBtn1 : 'Sotib olish',
        textBtn2 : "Yopish",
        textBtn3: "Imkoniyatlar",
        textBtnForm: "Tugatish" 
    }
]
window.addEventListener("load", () => {    
    let results  = document.querySelector(".result")
    let img = document.createElement("img")
    img.id = 'images'
    img.style.width = '80%'
    img.style.margin = '0 auto'
    let parentBtn = document.createElement("div")
    parentBtn.classList.add("parent_btn")
    let btn = document.createElement("button")
    let a = document.createElement("a")
    a.href = '#shop'
    a.appendChild(document.createTextNode(textlar[0].textBtn1))
    btn.appendChild(a)
    console.log(btn)
    console.log(a)
    let btn2 = document.createElement("button")
    btn2.appendChild(document.createTextNode(textlar[0].textBtn2))
    let btn3 = document.createElement("button")
    let a2 = document.createElement("a")
    a2.appendChild(document.createTextNode(textlar[0].textBtn3))
    a2.href = '#cards'
    btn3.appendChild(a2)
    let shop = document.querySelector(".shop")
    let inputName = document.getElementById("input_name")
    let inputEmail  = document.getElementById("input_email")
    let inputAge = document.getElementById("input_age")
    let inputPassword = document.getElementById("input_password")
    let formBtn = document.getElementById("form_btn")
    let aFormbtn = document.createElement("a")
    aFormbtn.href = '#cost'
    aFormbtn.appendChild(document.createTextNode(textlar[0].textBtnForm))
    formBtn.appendChild(aFormbtn)
    let cards = document.querySelector(".cards")
    document.getElementById("televizor").addEventListener("click", () => {
        img.src = mahsulotlar[0].image
        img.alt = 'Televizor image'
        results.style.opacity = '1'
        results.appendChild(img)
        results.appendChild(parentBtn)
        parentBtn.appendChild(btn)
        parentBtn.appendChild(btn2)
        parentBtn.appendChild(btn3) 
        let result = []
        btn.onclick = () => {
            shop.style.display = 'block'
            console.log(result)
            inputName.addEventListener("keyup", (e) => {
                let value = e.target.value
                for(let i = 0; i <value.length; i++){
                    if(e.keyCode === 13){
                        console.log(value)
                    }
                }
                if(e.keyCode === 13){
                    result = [...result, inputName]
                    console.log(result)
                }
            })
            inputEmail.addEventListener("keyup", (e) => {
                let value = e.target.value
                for(let i = 0; i <value.length; i++){
                    if(e.keyCode === 13){
                        console.log(value)
                    }
                }
                if(e.keyCode === 13){
                    result = [...result, inputEmail]
                    console.log(result)
                }
            })
            inputAge.addEventListener("keyup", (e) => {
                let value = e.target.value
                for(let i = 0; i <value.length; i++){
                    if(e.keyCode === 13){
                        console.log(value)
                    }
                }
                if(e.keyCode === 13){
                    result = [...result, inputAge]
                    console.log(result)
                }
            })
            inputPassword.addEventListener("keyup", (e) => {
                let value = e.target.value
                for(let i = 0; i <value.length; i++){
                    if(e.keyCode === 13){
                        console.log(value)
                    }
                }
                if(e.keyCode === 13){
                    result = [...result, inputPassword]
                    console.log(result)
                }
            })
            formBtn.addEventListener("click", () => {
                for(let i = 0 ; i<result.length; i++){
                    shop.style.display='none'
                }
                let cost = document.querySelector(".cost")
                cost.style.display = 'block'
                let select = document.querySelector("#select")
                select.addEventListener("change", () => {
                    console.log("ishladi")
                    let text  = document.querySelector("#new_rangi")
                    let nameTel = document.querySelector("#name_tel")
                    let newDyum = document.querySelector("#new_dyum")
                    let newCost = document.querySelector("#new_cost")
                    if(select.value === "black"){
                        select.style.background = 'black'
                        select.style.color = '#fff'
                        nameTel.textContent = mahsulotlar[0].name
                        text.textContent = 'Qora'
                        newDyum.textContent = mahsulotlar[0].dyum
                        newCost.textContent = mahsulotlar[0].cost + "$"
                    }else if(select.value === "white"){
                        select.classList.add("oqUchun")
                        select.style.color = '#fff'
                        nameTel.textContent = mahsulotlar[0].name
                        text.textContent = 'Oq'
                        newDyum.textContent = mahsulotlar[0].dyum
                        newCost.textContent = mahsulotlar[0].cost + "$"
                    }else if(select.value === 'grey'){
                        select.classList.add("greyUchun")
                        select.style.color = 'grey'
                        nameTel.textContent = mahsulotlar[0].name
                        text.textContent = 'Kulrang'
                        newDyum.textContent = mahsulotlar[0].dyum
                        newCost.textContent = mahsulotlar[0].cost + "$"
                    }
                        document.getElementById("harid").addEventListener("click", () => {
                        alert("Haridingiz uchun rahmat")
                        setTimeout(() => {  
                            cost.style.display = 'none'
                            result = [...result, nameTel.textContent, newDyum, newCost ]
                            let korzina = document.getElementById("korzina")
                            if(korzina.getAttribute( "class" ,"._btn_fixed_btn")){
                                korzina.addEventListener("click", () => {
                                    console.log("ishladi")
                                    for(let  i = 0; i<= result.length; i++){
                                        if(result[i] === nameTel.textContent){
                                            console.log(result)
                                            alert(`Siz hozircha faqatgina ${mahsulotlar[0].name} ni harid qildingiz ... ` )
                                        }
                                    }
                                })
                            }
                            console.log(result)
                        }, 1000)

                    })
                })
            })
        }
        btn2.onclick = () => {
            results.style.opacity= '0'      
        }
        let yop = document.querySelector(".yop")
        btn3.onclick = function() {
            cards.style.display = 'flex'
            document.getElementById("names").innerHTML = mahsulotlar[0].name
            document.getElementById("dyumes").innerHTML =  mahsulotlar[0].dyum  
            document.getElementById("hotira").innerHTML = mahsulotlar[0].hotira
            document.getElementById("mobile").innerHTML = mahsulotlar[0].mobile
            document.getElementById("qushimcha").innerHTML = mahsulotlar[0].qushimcha
            if(yop.matches("#yopish")){
                yop.addEventListener("click", () => {
                    setTimeout(() => {
                        cards.style.display= 'none'
                    }, 1000)
                })              
            }
        }
    })
    let btns = document.createElement("div")
        btns.classList.add("parent_btn")
    let btn1 = document.createElement("button")
    let btn1A = document.createElement("a")
    btn1A.appendChild(document.createTextNode(textlar[0].textBtn1))
    btn1.appendChild(btn1A)
    btn1A.href = '#shop'
    let btn4 = document.createElement("button")
    btn4.appendChild(document.createTextNode("Yopish"))
    let btn5 = document.createElement("button")
    let images = document.createElement("img")
    document.getElementById("holodilnik").addEventListener("click", () => {
        results.style.opacity = '1'
        btns.appendChild(btn1)
        btns.appendChild(btn4)
        btns.appendChild(btn5)
        images.src = mahsulotlar[1].image
        images.alt = 'Rasm holodilnik'
        images.style.width = '70%'
        images.style.margin = '0 auto'
        results.appendChild(images)
        results.appendChild(btns)
        
        btn1.onclick = () => {
            let result = []
            console.log(result)
            shop.style.display = 'block'        
            inputName.addEventListener("keyup", (e) => {
                if(e.keyCode === 13){
                    let value = e.target.value
                    console.log(value)
                    result = [...result, inputName]
                    console.log(result)
                }
            })
            inputEmail.addEventListener("keypress", (e) => {
                if(e.keyCode === 13){
                    let value = e.target.value
                    console.log(value)
                     result = [...result, inputEmail]
                    console.log(result)
                }
            })
            inputAge.addEventListener("keyup", (e) => {
                if(e.keyCode === 13){
                    let value = e.target.value
                    console.log(value)
                    result = [...result, inputAge]
                    console.log(result)
                }
            })
            inputPassword.addEventListener("keyup", (e) => {
                if(e.keyCode === 13){
                    let value = e.target.value
                    console.log(value)
                    result = [...result, inputPassword]
                    console.log(result)
                }
                console.log(result)
            })
            aFormbtn.addEventListener("click", () => {
                for(let i = 3; i< result.length; i++){
                    if(i <= 3){
                        setTimeout(() => {
                            shop.style.display ='none'
                        }, 1000)
                    }
                }
                let cost = document.querySelector(".cost")
                cost.style.display = 'block'
                let select = document.getElementById("select")
                let nameTel = document.getElementById("name_tel")
                nameTel.textContent = mahsulotlar[1].name
                let dyum  = document.getElementById("new_dyum")
                dyum.textContent = mahsulotlar[1].ulcham
                let colorTel = document.getElementById("new_rangi")
                let newCost  =document.getElementById("new_cost")
                newCost.textContent = mahsulotlar[1].cost + "$"
                select.onchange = () =>{
                    if(select.value === "black"){
                        select.classList.add("qoraUchun")
                        colorTel.textContent = 'Qora'
                    }else if(select.value === 'white'){
                        select.classList.remove("qoraUchun")
                        select.classList.add("oqUchun")
                        colorTel.textContent = 'Oq'
                    }else if(select.value === 'grey'){
                        select.classList.remove("oqUchun")
                        select.classList.add("greyUchun")
                        colorTel.textContent = 'Kulrang'               
                    }
                }
                let harid = document.getElementById("harid")
                harid.onclick = function() {
                    alert("Haridigiz uchun rahmat")
                    setTimeout(() => {
                        cost.style.display ='none'
                        console.log(result)
                        result = [...result, mahsulotlar[1].image]
                        for(let  i = 0; i<=result.length; i++){
                            if(i === 5){break}
                            if(result[i] === "./Images/Holodilnik.jpg")
                            document.getElementById("korzina").addEventListener("click", () => {
                                alert(`Siz hozircha faqat ${mahsulotlar[1].name} ni sotib oldingiz ... `)
                            })
                        }
                    }, 1000)   
                }
            })          
        }

        btn4.onclick = () => {
            results.style.opacity = '0'
        }
        let btn5A= document.createElement("a")
        btn5A.appendChild(document.createTextNode(textlar[0].textBtn3))
        btn5.appendChild(btn5A)
        btn5A.href = '#cards'
        btn5A.onclick  = () => {
            console.log("ishladi")
            cards.style.display = 'flex'
            document.getElementById("card_img").style.display = 'none'
            let img = document.createElement("img")
            img.src = mahsulotlar[1].image 
            document.getElementById("holodilnik_img").style.display = 'flex'
            document.getElementById("holodilnik_img").style.margin = " 0 auto"
            document.getElementById("names").textContent = mahsulotlar[1].name
            document.getElementById("dyumes").textContent = mahsulotlar[1].ulcham
            document.getElementById("hotira").textContent = mahsulotlar[1].turi
            document.getElementById("mobile").textContent = mahsulotlar[1].xladagent
            document.getElementById("qushimcha").innerHTML = mahsulotlar[1].display
        }
        let card = document.querySelector(".card")
        let yop = document.querySelector("#yopish")
        yop.addEventListener("click", () => {
            setTimeout(() => {
                let tekshir = card.matches("#card")? cards.style.display = 'none': console.log('xato')
                console.log(tekshir)
            }, 1000)
        })
    })
})