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
    }
    UrlComponent.prototype.generate = function () {
        var _this = this;
        var main = document.querySelector('main');
        var component = document.createElement('div');
        var componentTitle = document.createElement('div');
        var iFrame = document.createElement('iframe');
        var button = document.createElement('button');
        var icon = document.createElement('i');
        component.setAttribute('class', 'url-component component');
        componentTitle.setAttribute('class', 'component-title');
        button.setAttribute('class', 'delete-btn btn');
        icon.setAttribute('class', 'fa-solid fa-xmark');
        main === null || main === void 0 ? void 0 : main.appendChild(component);
        component === null || component === void 0 ? void 0 : component.appendChild(iFrame);
        component === null || component === void 0 ? void 0 : component.appendChild(componentTitle);
        component === null || component === void 0 ? void 0 : component.appendChild(button);
        button === null || button === void 0 ? void 0 : button.appendChild(icon);
        componentTitle.innerText = this.title;
        iFrame.src = this.url;
        var inputDataTitle = document.getElementById('url-title');
        var inputDataUrl = document.getElementById('url-url');
        this.title = inputDataTitle.value;
        this.url = inputDataUrl.value;
        urlDialog === null || urlDialog === void 0 ? void 0 : urlDialog.addEventListener('submit', function (e) {
            e.preventDefault();
            urlDialog.classList.remove('display');
            new UrlComponent(_this.title, _this.url).generate();
        });
    };
    return UrlComponent;
}());
var inputDataTitle = document.getElementById('url-title');
var inputDataUrl = document.getElementById('url-url');
urlDialog === null || urlDialog === void 0 ? void 0 : urlDialog.addEventListener('submit', function (e) {
    e.preventDefault();
    urlDialog.classList.remove('display');
    new UrlComponent(inputDataTitle.value, inputDataUrl.value).generate();
});
// component를 만들어 generate함수 쓰는 과정 다시 한번 설계해보기
var StringComponent = /** @class */ (function () {
    function StringComponent(title, description) {
        this.title = title;
        this.description = description;
    }
    StringComponent.prototype.generate = function () {
        var inputDataTitle = document.getElementById('string-title');
        this.title = inputDataTitle.value;
        var inputDataDescription = document.getElementById('string-description');
        this.description = inputDataDescription.value;
    };
    return StringComponent;
}());
//# sourceMappingURL=main.js.map