const suc = document.getElementById('suc')


const TOKEN = "5830939480:AAEkdFNY0ZFNGaPK4SY36ku6KnEJCgeryd0";
const CHAT_ID = "-1001706062123";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `<b>Yangi Habar</b> \n`;
  message += `<i>ISM: </i> ${this.nam.value} \n`;
  message += `<i>FAMILIYA:</i> ${this.sureNam.value} \n`;
  message += `<i>TELEFON:</i> ${this.tel.value} \n`;
  message += `<i>FOYDALANUVCHI HABARI: </i> ${this.txt.value}`;

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  })
  .then((pre) => {
    this.nam.value = "";
    this.sureNam.value = "";
    this.txt.value = "";
    suc.innerHTML = "Habar Jo'natildi"
    suc.style.display = 'block'

    setTimeout(() => {
        suc.style.display = 'none'
    },2000)
  })
});
