"use strict";
// dialog
var openBtns = document.querySelectorAll('.open-btn');
var closeBtns = document.querySelectorAll('.close-btn');
var dialogs = document.querySelectorAll('.dialog');
var urlDialog = document.querySelector('.url-dialog');
var stringDialog = document.querySelector('.string-dialog');
function openDialog(element) {
    if (element.classList.contains('url-btn')) {
        urlDialog === null || urlDialog === void 0 ? void 0 : urlDialog.classList.add('display');
    }
    else if (element.classList.contains('string-btn')) {
        stringDialog === null || stringDialog === void 0 ? void 0 : stringDialog.classList.add('display');
    }
}
function closeDialog() {
    dialogs.forEach(function (e) { e.classList.remove('display'); });
}
openBtns.forEach(function (e) { return e.addEventListener('click', function () {
    openDialog(e);
}); });
closeBtns.forEach(function (e) {
    e.addEventListener('click', function () {
        closeDialog();
    });
});
// component
var main = document.querySelector('main');
var deleteBtns = document.querySelector('.delete-btn');
var components = document.querySelector('.component');
var UrlComponent = /** @class */ (function () {
    function UrlComponent(title, url) {
        this.title = title;
        this.url = url;
        this.component = document.createElement('div');
        this.componentTitle = document.createElement('div');
        this.iFrame = document.createElement('iframe');
        this.button = document.createElement('button');
        this.icon = document.createElement('i');
    }
    UrlComponent.prototype.generate = function () {
        var _a, _b, _c, _d;
        main === null || main === void 0 ? void 0 : main.appendChild(this.component);
        (_a = this.component) === null || _a === void 0 ? void 0 : _a.appendChild(this.iFrame);
        (_b = this.component) === null || _b === void 0 ? void 0 : _b.appendChild(this.componentTitle);
        (_c = this.component) === null || _c === void 0 ? void 0 : _c.appendChild(this.button);
        (_d = this.button) === null || _d === void 0 ? void 0 : _d.appendChild(this.icon);
        this.component.setAttribute('class', 'url-component component');
        this.componentTitle.setAttribute('class', 'component-title');
        this.button.setAttribute('class', 'delete-btn btn');
        this.icon.setAttribute('class', 'fa-solid fa-xmark');
        this.componentTitle.innerText = this.title;
        this.iFrame.src = this.url;
    };
    return UrlComponent;
}());
var inputUrlTitle = document.getElementById('url-title');
var inputUrl = document.getElementById('url-url');
urlDialog === null || urlDialog === void 0 ? void 0 : urlDialog.addEventListener('submit', function (e) {
    e.preventDefault();
    urlDialog.classList.remove('display');
    var newComponent = new UrlComponent(inputUrlTitle.value, inputUrl.value);
    newComponent.generate();
});
var StringComponent = /** @class */ (function () {
    function StringComponent(title, description) {
        this.title = title;
        this.description = description;
        this.component = document.createElement('div');
        this.componentTitle = document.createElement('div');
        this.componentDescription = document.createElement('div');
        this.button = document.createElement('button');
        this.icon = document.createElement('i');
    }
    StringComponent.prototype.generate = function () {
        var _a, _b, _c, _d;
        main === null || main === void 0 ? void 0 : main.appendChild(this.component);
        (_a = this.component) === null || _a === void 0 ? void 0 : _a.appendChild(this.componentTitle);
        (_b = this.component) === null || _b === void 0 ? void 0 : _b.appendChild(this.componentDescription);
        (_c = this.component) === null || _c === void 0 ? void 0 : _c.appendChild(this.button);
        (_d = this.button) === null || _d === void 0 ? void 0 : _d.appendChild(this.icon);
        this.component.setAttribute('class', 'string-component component');
        this.componentTitle.setAttribute('class', 'component-title');
        this.componentDescription.setAttribute('class', 'component-description');
        this.button.setAttribute('class', 'delete-btn btn');
        this.icon.setAttribute('class', 'fa-solid fa-xmark');
        this.componentTitle.innerText = this.title;
        this.componentDescription.innerText = this.description;
    };
    return StringComponent;
}());
var inputStringTitle = document.getElementById('string-title');
var inputString = document.getElementById('string-description');
stringDialog === null || stringDialog === void 0 ? void 0 : stringDialog.addEventListener('submit', function (e) {
    e.preventDefault();
    stringDialog.classList.remove('display');
    var newComponent = new UrlComponent(inputUrlTitle.value, inputUrl.value);
    newComponent.generate();
});
//# sourceMappingURL=main.js.map