/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://table-webpack/./src/styles/main.scss?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./src/styles/main.scss\");\nconst newUserID = document.querySelector(\"[name='newUserID']\");\r\nconst newFirstName = document.querySelector(\"[name='newFirstName']\");\r\nconst newLastName = document.querySelector(\"[name='newLastName']\");\r\nconst newMiddleName = document.querySelector(\"[name='newMiddleName']\");\r\nconst newPassword = document.querySelector(\"[name='newPassword']\");\r\nconst newBirthDate = document.querySelector(\"[name='newBirthDate']\");\r\nconst newPicture = document.querySelector(\"[name='newPicture']\");\r\nconst newRegistered = document.querySelector(\"[name='newRegistered']\");\r\n\r\nconst btn_showItemToOrder = document.querySelector(\"[name='showItemToOrder']\");\r\nconst btn_addItemToOrder = document.querySelector(\"[name='addItemToOrder']\");\r\nconst btn_addUser = document.querySelector(\"[name='addUser']\");\r\n\r\nconst orderItem = document.getElementById('id_orderItem');\r\nconst orderTable = document.getElementById('id_orderTable');\r\nconst orderTableTbody = orderTable.querySelector('tbody');//что бы вставить строку в tbody\r\n\r\nvar isEditMode = false;\r\nvar validationSummary = \"\";\r\n\r\n\r\nconst apiURL = \"http://localhost:55000/api/users\";\r\n\r\nconst newUser = {};\r\n\r\nvar values = [];\r\n\r\nfunction prepareValues() {\r\n  return new Promise((resolve) => {\r\n    $.get(apiURL, (data) => {\r\n      Object.assign(values, data);\r\n\r\n      resolve(values);\r\n    });\r\n  })\r\n}\r\n\r\n//заполняет строку новыми данными\r\nfunction appendOrderItemValues(row, values)//передаются оба по ссылке\r\n{\r\n  let UserIDCell = row.insertCell(0);\r\n  UserIDCell.innerHTML = values.UserID;\r\n\r\n  let FirstNameCell = row.insertCell(1);\r\n  FirstNameCell.innerHTML = values.FirstName;\r\n\r\n  let LastNameCell = row.insertCell(2);\r\n  LastNameCell.innerHTML = values.LastName;\r\n\r\n  let MiddleNameCell = row.insertCell(3);\r\n  MiddleNameCell.innerHTML = values.MiddleName;\r\n\r\n  let PasswordCell = row.insertCell(4);\r\n  PasswordCell.innerHTML = values.Password;\r\n\r\n  let BirthDateCell = row.insertCell(5);\r\n  BirthDateCell.innerHTML = values.BirthDate;\r\n\r\n  let PictureCell = row.insertCell(6);\r\n  PictureCell.innerHTML = values.Picture;\r\n\r\n  let RegisteredCell = row.insertCell(7);\r\n  RegisteredCell.innerHTML = values.Registered;\r\n\r\n  let actionsCell = row.insertCell(8);\r\n  actionsCell.innerHTML = \"<input type='button' name='btnDeleteItem' onclick='deleteItem(this)' value='Delete'/> \";\r\n  actionsCell.innerHTML += \"<input type='button' name='btnEditItem' onclick='editItem(this)' value='Edit'/> \";\r\n\r\n  newUserID.value = \"\";\r\n  newFirstName.value = \"\";\r\n  newLastName.value = \"\";\r\n  newMiddleName.value = \"\";\r\n  newPassword.value = \"\";\r\n  newBirthDate.value = \"\";\r\n  newPicture.value = \"\";\r\n  newRegistered.value = \"\";\r\n\r\n}\r\n\r\nfunction createInput(newItemValue, type) {\r\n  let newInput = document.createElement(\"input\");\r\n  newInput.type = type;\r\n  newInput.value = newItemValue;\r\n  return newInput;\r\n}\r\n\r\nfunction edit(editRow, values) {\r\n  let FirstNameInput = createInput(values.FirstName, \"text\");\r\n  editRow.childNodes[1].innerHTML = \"\";\r\n  editRow.childNodes[1].appendChild(FirstNameInput);\r\n\r\n  let LastNameInput = createInput(values.LastName, \"text\");\r\n  editRow.childNodes[2].innerHTML = \"\";\r\n  editRow.childNodes[2].appendChild(LastNameInput);\r\n\r\n  let MiddleNameInput = createInput(values.MiddleName, \"text\");\r\n  editRow.childNodes[3].innerHTML = \"\";\r\n  editRow.childNodes[3].appendChild(MiddleNameInput);\r\n\r\n  let PasswordInput = createInput(values.Password, \"password\");\r\n  editRow.childNodes[4].innerHTML = \"\";\r\n  editRow.childNodes[4].appendChild(PasswordInput);\r\n\r\n  let BirthDateInput = createInput(values.BirthDate, \"date\");\r\n  editRow.childNodes[5].innerHTML = \"\";\r\n  editRow.childNodes[5].appendChild(BirthDateInput);\r\n\r\n  let PictureInput = createInput(values.Picture, \"text\");\r\n  editRow.childNodes[6].innerHTML = \"\";\r\n  editRow.childNodes[6].appendChild(PictureInput);\r\n\r\n  let RegisteredInput = createInput(values.Registered, \"date\");\r\n  editRow.childNodes[7].innerHTML = \"\";\r\n  editRow.childNodes[7].appendChild(RegisteredInput);\r\n\r\n}\r\n\r\nfunction editItem(button) {\r\n  var editRow = button.parentNode.parentNode;\r\n\r\n  newUser.FirstName = editRow.childNodes[1].innerHTML;\r\n  newUser.LastName = editRow.childNodes[2].innerHTML;\r\n  newUser.MiddleName = editRow.childNodes[3].innerHTML;\r\n  newUser.Password = editRow.childNodes[4].innerHTML;\r\n  newUser.BirthDate = editRow.childNodes[5].innerHTML;\r\n  newUser.Picture = editRow.childNodes[6].innerHTML;\r\n  newUser.Registered = editRow.childNodes[7].innerHTML;\r\n\r\n  edit(editRow, newUser);\r\n\r\n  if (!isEditMode) {\r\n    button.parentNode.innerHTML += \"<input type='button' name='btnSaveItem' onclick='saveItem(this)' value='Save'/>\";\r\n    isEditMode = true;\r\n  }\r\n\r\n}\r\n\r\nfunction saveItem(button) {\r\n  let editRow = button.parentNode.parentNode;\r\n\r\n  for (let i = 1; i < 8; i++) {\r\n    editRow.childNodes[i].innerHTML = editRow.childNodes[i].firstChild.value;\r\n  }\r\n\r\n  newUser.UserID = editRow.childNodes[0].innerHTML;\r\n  newUser.FirstName = editRow.childNodes[1].innerHTML;\r\n  newUser.LastName = editRow.childNodes[2].innerHTML;\r\n  newUser.MiddleName = editRow.childNodes[3].innerHTML;\r\n  newUser.Password = editRow.childNodes[4].innerHTML;\r\n  newUser.BirthDate = editRow.childNodes[5].innerHTML;\r\n  newUser.Picture = editRow.childNodes[6].innerHTML;\r\n  if (editRow.childNodes[7].innerHTML) {\r\n    newUser.Registered = editRow.childNodes[7].innerHTML;\r\n  }\r\n  else {\r\n    let now = new Date();\r\n    newUser.Registered = now.toISOString();\r\n  }\r\n\r\n  //PUT - запрос\r\n  if (validate(newUser)) {\r\n  $.ajax({\r\n    type: \"PUT\",\r\n    url: apiURL,\r\n    data: newUser,\r\n    success: (data) => { \r\n      showItemToOrder();\r\n      if (isEditMode) isEditMode = false;\r\n\r\n      let delButtonSave = button.parentNode;\r\n      delButtonSave.removeChild(delButtonSave.childNodes[4]);//удаляем кнопку save\r\n    \r\n      alert(\"Пользователь успешно изменен\");\r\n    },\r\n    dataType: \"json\"\r\n  });\r\n  }\r\n  else {\r\n    editItem(button);\r\n    alert(validationSummary);\r\n  }\r\n}\r\n\r\n\r\nfunction showItemToOrder() {\r\n  // Получить всех пользователей\r\n  let newRow = 0;\r\n\r\n  prepareValues().then(() => {\r\n    console.dir(values);\r\n    while (orderTableTbody.firstChild) {\r\n      orderTableTbody.removeChild(orderTableTbody.firstChild);\r\n    }\r\n    for (let item of values) {\r\n      newRow = orderTableTbody.insertRow();//возвращает ссылку на новую строку в\r\n      appendOrderItemValues(newRow, item);\r\n    }\r\n\r\n  });\r\n};\r\n\r\n\r\nfunction validate(User) {\r\n  let result = true;\r\n  validationSummary = \"\";\r\n  let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\\w\\s]).{6,}/;\r\n\r\n  if (!User.FirstName) {\r\n    result = false;\r\n    validationSummary += \"Имя пустое!\\n\";\r\n  }\r\n\r\n  if (!User.LastName) {\r\n    result = false;\r\n    validationSummary += \"Фамилия пустая!\\n\";\r\n  }\r\n\r\n  if (!User.MiddleName) {\r\n    result = false;\r\n    validationSummary += \"Отчество пустое!\\n\";\r\n  }\r\n\r\n  if (!User.Password) {\r\n    result = false;\r\n    validationSummary += \"Пароль пуст!\\n\";\r\n  }\r\n  else if (reg.test(User.Password) == false) {\r\n    result = false;\r\n    validationSummary += \"Введите корректный пароль. Пароль должен содержать буквы верхнего и нижнего регистров, цифры и символы!\\n\";\r\n  }\r\n\r\n  if (!User.BirthDate) {\r\n    result = false;\r\n    validationSummary += \"Дата пустая!\\n\";\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction submitUser() {\r\n  newUser.UserID = newUserID.value;\r\n  newUser.FirstName = newFirstName.value;\r\n  newUser.LastName = newLastName.value;\r\n  newUser.MiddleName = newMiddleName.value;\r\n  newUser.Password = newPassword.value;\r\n  newUser.BirthDate = newBirthDate.value;\r\n  newUser.Picture = newPicture.value;\r\n  if (newRegistered.value) {\r\n    newUser.Registered = newRegistered.value;\r\n  }\r\n  else {\r\n    let now = new Date();\r\n    newUser.Registered = now.toISOString();\r\n  }\r\n\r\n  if (validate(newUser)) {\r\n    $.post(apiURL, newUser, (data) => {\r\n      showItemToOrder();\r\n      hiddenTrue();\r\n      alert(\"Пользователь успешно добавлен\");\r\n    });\r\n  }\r\n  else {\r\n    alert(validationSummary);\r\n  }\r\n}\r\n\r\nfunction hiddenTrue() {\r\n  orderItem.querySelector('thead').hidden = true;\r\n  orderItem.querySelector('tbody > tr:nth-child(1)').hidden = true;\r\n  btn_addUser.hidden = true;\r\n  btn_addItemToOrder.value = \"Add To New User\";\r\n}\r\n\r\nfunction hiddenFalse() {\r\n  orderItem.querySelector('thead').hidden = false;\r\n  orderItem.querySelector('tbody > tr:nth-child(1)').hidden = false;\r\n  btn_addUser.hidden = false;\r\n  btn_addItemToOrder.value = \"Hide To New User\";\r\n}\r\n\r\nfunction deleteItem(button) {\r\n  if (isEditMode) isEditMode = false;\r\n\r\n  var editID = button.parentNode.parentNode;\r\n\r\n// //DELETE - запрос\r\n$.ajax({\r\n    type: \"DELETE\",\r\n    url: apiURL + \"/\" + editID.childNodes[0].innerHTML,\r\n    success: (data)=> { \r\n      if(data) \r\n      {    \r\n        values.pop();\r\n        showItemToOrder();\r\n        alert(\"Пользователь успешно удален\");\r\n      }\r\n    }\r\n});\r\n}\r\n\r\nvar check = true;\r\nbtn_addItemToOrder.addEventListener(\"click\", () => {\r\n  if (check) {\r\n    hiddenFalse();\r\n    check = false;\r\n  }\r\n  else {\r\n    hiddenTrue();\r\n    check = true;\r\n  }\r\n})\r\n\r\nbtn_showItemToOrder.addEventListener(\"click\", showItemToOrder);\r\n\r\nbtn_addUser.addEventListener(\"click\", submitUser);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://table-webpack/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;