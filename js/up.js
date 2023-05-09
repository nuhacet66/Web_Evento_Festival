// Establecer la fecha límite para la cuenta atrás
let deadline = new Date("Sep 1, 2023 10:00:00").getTime();
    
// Actualizar el contador cada segundo
let x = setInterval(function() {
  // Obtener la fecha y hora actual
  let now = new Date().getTime();
  
  // Calcular la diferencia entre la fecha límite y la fecha actual
  let distance = deadline - now;
  
  // Calcular los días, horas, minutos y segundos restantes
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Actualizar los elementos HTML con los nuevos valores
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  // Si la cuenta atrás ha terminado, mostrar un mensaje
  if (distance < 0) {
	clearInterval(x);
	document.getElementById("countdown").innerHTML = "¡La cuenta atrás ha terminado!";
  confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});
  }
}, 1000);
	