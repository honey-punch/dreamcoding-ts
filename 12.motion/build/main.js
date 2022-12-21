"use strict";
var btns = document.querySelectorAll('header .btn');
var urlBtns = document.querySelectorAll('.url-btn');
var stringBtns = document.querySelectorAll('.string-btn');
var addBtns = document.querySelectorAll('.add-btn');
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
btns.forEach(function (e) { return e.addEventListener('click', function () {
    openDialog(e);
}); });
closeBtns.forEach(function (e) {
    e.addEventListener('click', function () {
        closeDialog();
    });
});
var UrlComponent = /** @class */ (function () {
    function UrlComponent(title, url) {
        this.title = title;
        this.url = url;
        this.main = document.querySelector('main');
        this.component = document.createElement('div');
        this.componentTitle = document.createElement('div');
        this.iFrame = document.createElement('iframe');
        this.button = document.createElement('button');
        this.icon = document.createElement('i');
    }
    UrlComponent.prototype.generate = function () {
        var _a, _b, _c, _d, _e;
        this.component.setAttribute('class', 'url-component component');
        this.componentTitle.setAttribute('class', 'component-title');
        this.button.setAttribute('class', 'delete-btn btn');
        this.icon.setAttribute('class', 'fa-solid fa-xmark');
        (_a = this.main) === null || _a === void 0 ? void 0 : _a.appendChild(this.component);
        (_b = this.component) === null || _b === void 0 ? void 0 : _b.appendChild(this.iFrame);
        (_c = this.component) === null || _c === void 0 ? void 0 : _c.appendChild(this.componentTitle);
        (_d = this.component) === null || _d === void 0 ? void 0 : _d.appendChild(this.button);
        (_e = this.button) === null || _e === void 0 ? void 0 : _e.appendChild(this.icon);
        this.componentTitle.innerText = this.title;
        this.iFrame.src = this.url;
    };
    return UrlComponent;
}());
var StringComponent = /** @class */ (function () {
    function StringComponent(title, description) {
        this.title = title;
        this.description = description;
        this.main = document.querySelector('main');
        this.component = document.createElement('div');
        this.componentTitle = document.createElement('div');
        this.componentDescription = document.createElement('div');
        this.button = document.createElement('button');
        this.icon = document.createElement('i');
    }
    StringComponent.prototype.generate = function () {
        var _a, _b, _c, _d, _e;
        this.component.setAttribute('class', 'string-component component');
        this.componentTitle.setAttribute('class', 'component-title');
        this.componentDescription.setAttribute('class', 'component-description');
        this.button.setAttribute('class', 'delete-btn btn');
        this.icon.setAttribute('class', 'fa-solid fa-xmark');
        (_a = this.main) === null || _a === void 0 ? void 0 : _a.appendChild(this.component);
        (_b = this.component) === null || _b === void 0 ? void 0 : _b.appendChild(this.componentTitle);
        (_c = this.component) === null || _c === void 0 ? void 0 : _c.appendChild(this.componentDescription);
        (_d = this.component) === null || _d === void 0 ? void 0 : _d.appendChild(this.button);
        (_e = this.button) === null || _e === void 0 ? void 0 : _e.appendChild(this.icon);
        this.componentTitle.innerText = this.title;
        this.componentDescription.innerText = this.description;
    };
    StringComponent.delete = function () {
        this.component.remove();
    };
    return StringComponent;
}());
var inputUrlTitle = document.getElementById('url-title');
var inputUrl = document.getElementById('url-url');
urlDialog === null || urlDialog === void 0 ? void 0 : urlDialog.addEventListener('submit', function (e) {
    e.preventDefault();
    urlDialog.classList.remove('display');
    new UrlComponent(inputUrlTitle.value, inputUrl.value).generate();
});
var inputStringTitle = document.getElementById('string-title');
var inputString = document.getElementById('string-description');
stringDialog === null || stringDialog === void 0 ? void 0 : stringDialog.addEventListener('submit', function (e) {
    e.preventDefault();
    stringDialog.classList.remove('display');
    new StringComponent(inputStringTitle.value, inputString.value).generate();
});
//# sourceMappingURL=main.js.map