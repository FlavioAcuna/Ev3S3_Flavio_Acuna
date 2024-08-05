function updateSeats(seatType, change) {
  const seatCountId = seatType + "Count";
  let seatCount = parseInt(document.getElementById(seatCountId).value);
  seatCount += change;

  if (seatCount < 0) {
    seatCount = 0;
  }
  document.getElementById(seatCountId).value = seatCount;
}

function calculateTotal() {
    let normalCount = parseInt(document.getElementById("normalCount").value);
    let preferencialCount = parseInt(
      document.getElementById("preferencialCount").value
    );
    let vipCount = parseInt(document.getElementById("vipCount").value);
  
    let totalSeats = normalCount + preferencialCount + vipCount;
    let totalPrice = 0;
  
    // Sumar el precio de cada tipo de asiento
    while (normalCount > 0) {
      totalPrice += 5000;
      normalCount--;
    }
  
    while (preferencialCount > 0) {
      totalPrice += 9000;
      preferencialCount--;
    }
  
    while (vipCount > 0) {
      totalPrice += 13000;
      vipCount--;
    }
  
    // Aplicar descuento si el total de asientos es 5 o más
    if (totalSeats >= 5) {
      totalPrice *= 0.9; // Aplicar descuento del 10%
    }
  
    // Mostrar el resultado
    if (totalPrice > 0) {
      document.getElementById("result").innerHTML = `<div class="alert alert-success">El total a pagar es: $${totalPrice.toLocaleString()}</div>`;
    } else {
      document.getElementById("result").innerHTML = '<div class="alert alert-danger">Seleccione al menos un asiento.</div>';
    }
  }