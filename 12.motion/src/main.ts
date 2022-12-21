const btns = document.querySelectorAll('header .btn');
const urlBtns = document.querySelectorAll('.url-btn');
const stringBtns = document.querySelectorAll('.string-btn');

const addBtns = document.querySelectorAll('.add-btn');
const closeBtns = document.querySelectorAll('.close-btn');

const dialogs = document.querySelectorAll('.dialog');
const urlDialog = document.querySelector('.url-dialog');
const stringDialog = document.querySelector('.string-dialog');

function openDialog(element: any): void {
  if (element.classList.contains('url-btn')) {
    urlDialog?.classList.add('display');
  } else if (element.classList.contains('string-btn')) {
    stringDialog?.classList.add('display');
  }
}
function closeDialog(): void {
  dialogs.forEach(e => {e.classList.remove('display')});
}

btns.forEach(e => e.addEventListener('click', () => {
  openDialog(e);
}));
closeBtns.forEach(e => {e.addEventListener('click', () => {
  closeDialog()
})});


interface Component {
  generate(): void;
}

class UrlComponent implements Component {
  main = document.querySelector('main');
  component = document.createElement('div');
  componentTitle = document.createElement('div');
  iFrame = document.createElement('iframe');
  button = document.createElement('button');
  icon = document.createElement('i');

  constructor(private title: string, private url: string) {}

  generate(): void {
    this.component.setAttribute('class', 'url-component component');
    this.componentTitle.setAttribute('class','component-title');
    this.button.setAttribute('class', 'delete-btn btn');
    this.icon.setAttribute('class', 'fa-solid fa-xmark');
    
    this.main?.appendChild(this.component);
    this.component?.appendChild(this.iFrame)
    this.component?.appendChild(this.componentTitle);
    this.component?.appendChild(this.button);
    this.button?.appendChild(this.icon);

    this.componentTitle.innerText = this.title;
    this.iFrame.src = this.url;
  }
}

class StringComponent implements Component {
  main = document.querySelector('main');
  component = document.createElement('div');
  componentTitle = document.createElement('div');
  componentDescription = document.createElement('div');
  button = document.createElement('button');
  icon = document.createElement('i');

  constructor(private title: string, private description: string) {}

  generate(): void {
    this.component.setAttribute('class', 'string-component component');
    this.componentTitle.setAttribute('class','component-title');
    this.componentDescription.setAttribute('class', 'component-description')
    this.button.setAttribute('class', 'delete-btn btn');
    this.icon.setAttribute('class', 'fa-solid fa-xmark');
    
    this.main?.appendChild(this.component);
    this.component?.appendChild(this.componentTitle);
    this.component?.appendChild(this.componentDescription);
    this.component?.appendChild(this.button);
    this.button?.appendChild(this.icon);
    
    this.componentTitle.innerText = this.title;
    this.componentDescription.innerText = this.description;
  }
  static delete(): void {
    this.component.remove();
  }
}

const inputUrlTitle = document.getElementById('url-title') as HTMLInputElement;
const inputUrl = document.getElementById('url-url') as HTMLInputElement;
urlDialog?.addEventListener('submit', (e) => {
  e.preventDefault();
  urlDialog.classList.remove('display');
  new UrlComponent(inputUrlTitle.value, inputUrl.value).generate();
});

const inputStringTitle = document.getElementById('string-title') as HTMLInputElement;
const inputString = document.getElementById('string-description') as HTMLInputElement;
stringDialog?.addEventListener('submit', (e) => {
  e.preventDefault();
  stringDialog.classList.remove('display');
  new StringComponent(inputStringTitle.value, inputString.value).generate();
});