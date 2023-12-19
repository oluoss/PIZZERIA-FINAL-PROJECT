
const modal1 = document.getElementById('myModal1');
const modal2 = document.getElementById('myModal2');
const modal3 = document.getElementById('myModal3');

const btn1 = document.getElementById('openModalBtn1');
const btn2 = document.getElementById('openModalBtn2');
const btn3 = document.getElementById('openModalBtn3');


btn1.addEventListener('click', () => {
  modal1.style.display = 'block';
});

btn2.addEventListener('click', () => {
  modal2.style.display = 'block';
});

btn3.addEventListener('click', () => {
  modal3.style.display = 'block';
});


document.querySelectorAll('.close').forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
  });
});


window.addEventListener('click', (event) => {
  if (event.target === modal1 || event.target === modal2 || event.target === modal3) {
    modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
  }
});
