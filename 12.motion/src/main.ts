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
  generate(title: string, url?: string, description?: string): void;
}

class UrlComponent implements Component {
  constructor(private title: string, private url: string) {}
  generate(): void {
    const main = document.querySelector('main');
    const component = document.createElement('div');
    const componentTitle = document.createElement('div');
    const iFrame = document.createElement('iframe');
    const button = document.createElement('button');
    const icon = document.createElement('i');

    component.setAttribute('class', 'url-component component');
    componentTitle.setAttribute('class','component-title');
    button.setAttribute('class', 'delete-btn btn');
    icon.setAttribute('class', 'fa-solid fa-xmark');
    
    main?.appendChild(component);
    component?.appendChild(iFrame)
    component?.appendChild(componentTitle);
    component?.appendChild(button);
    button?.appendChild(icon);

    componentTitle.innerText = this.title;
    iFrame.src = this.url;

    const inputDataTitle = document.getElementById('url-title') as HTMLInputElement;
    const inputDataUrl = document.getElementById('url-url') as HTMLInputElement;
    this.title = inputDataTitle.value;
    this.url = inputDataUrl.value;

    urlDialog?.addEventListener('submit', (e) => {
      e.preventDefault();
      urlDialog.classList.remove('display');
      new UrlComponent(this.title, this.url).generate();
    })
  }
}
const inputDataTitle = document.getElementById('url-title') as HTMLInputElement;
const inputDataUrl = document.getElementById('url-url') as HTMLInputElement;

urlDialog?.addEventListener('submit', (e) => {
  e.preventDefault();
  urlDialog.classList.remove('display');
  new UrlComponent(inputDataTitle.value, inputDataUrl.value).generate();
});
// component를 만들어 generate함수 쓰는 과정 다시 한번 설계해보기

class StringComponent implements Component {
  constructor(private title: string, private description: string) {}
  generate(): void {
    const inputDataTitle = document.getElementById('string-title') as HTMLInputElement;
    this.title = inputDataTitle.value;
    const inputDataDescription = document.getElementById('string-description') as HTMLInputElement;
    this.description = inputDataDescription.value;
  }
}


