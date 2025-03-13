"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const fruitSelect = document.getElementById("fruitSelect");
  const quantityInput = document.getElementById("quantity");
  const calcBtn = document.getElementById("calcBtn");
  const resetBtn = document.getElementById("resetBtn");
  const errorMsg = document.getElementById("errorMsg");

  // Eredménymezők
  const fatValue = document.getElementById("fatValue");
  const fiberValue = document.getElementById("fiberValue");
  const caloryValue = document.getElementById("caloryValue");
  const proteinValue = document.getElementById("proteinValue");
  const carbValue = document.getElementById("carbValue");

  // A legördülő listát (select) feltöltjük a data.js-ben lévő "fruits" tömbbel
  fruits.forEach((fruit) => {
    const option = document.createElement("option");
    option.value = fruit.id; // eltároljuk az ID-t
    option.textContent = fruit.name; // a megjelenő szöveg
    fruitSelect.appendChild(option);
  });

  // Számítás gombra kattintva
  calcBtn.addEventListener("click", () => {
    const selectedId = fruitSelect.value;
    const qty = parseFloat(quantityInput.value);

    // Ha nincs kiválasztott gyümölcs
    if (!selectedId) {
      errorMsg.classList.remove("d-none");
      return;
    } else {
      errorMsg.classList.add("d-none");
    }

    // Keressük ki a tömbből az ID alapján
    const fruitData = fruits.find((f) => f.id == selectedId);
    if (!fruitData) return;

    // Számítás (mennyiség * tápérték)
    const totalFat = fruitData.fat * qty;
    const totalFiber = fruitData.fiber * qty;
    const totalCalory = fruitData.calory * qty;
    const totalProtein = fruitData.protein * qty;
    const totalCarb = fruitData.carbohydrate * qty;

    // Eredmény kiírás (1 tizedesjegy pontossággal, a feladat szerint)
    fatValue.textContent = totalFat.toFixed(1) + " g";
    fiberValue.textContent = totalFiber.toFixed(1) + " g";
    caloryValue.textContent = totalCalory.toFixed(1) + " kcal";
    proteinValue.textContent = totalProtein.toFixed(1) + " g";
    carbValue.textContent = totalCarb.toFixed(1) + " g";
  });

  // Visszaállítás gomb
  resetBtn.addEventListener("click", () => {
    // Form alapállapot
    fruitSelect.value = "";
    quantityInput.value = 1;
    errorMsg.classList.add("d-none");

    // Eredmények törlése
    fatValue.textContent = "-";
    fiberValue.textContent = "-";
    caloryValue.textContent = "-";
    proteinValue.textContent = "-";
    carbValue.textContent = "-";
  });
});
