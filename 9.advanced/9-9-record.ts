type PageInfo = {
  title: string;
}
type Page = 'home' | 'about' | 'contact';

// 두 타입 연결
// Page는 키, PageInfo는 밸류
const nav: Record<Page, PageInfo> = {
  home: {title: 'Home'},
  about: {title: 'About'},
  contact: {title: 'Contact'},
}

type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'