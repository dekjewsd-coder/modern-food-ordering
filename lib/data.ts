export type Lang='th'|'en';
export type Food={id:number;name:{th:string;en:string};desc:{th:string;en:string};category:string;price:number;image:string};
export const foods:Food[]=[
{id:1,name:{th:'ข้าวกะเพราไข่ดาว',en:'Basil Pork Rice with Fried Egg'},desc:{th:'หมูผัดกะเพราหอม ๆ เสิร์ฟพร้อมไข่ดาวกรอบนอกนุ่มใน',en:'Aromatic basil pork served with a crispy-edged fried egg.'},category:'main',price:79,image:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85'},
{id:2,name:{th:'ข้าวไก่เทอริยากิ',en:'Teriyaki Chicken Rice'},desc:{th:'ไก่ย่างซอสเทอริยากิรสกลมกล่อม',en:'Tender grilled chicken glazed with teriyaki sauce.'},category:'main',price:89,image:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85'},
{id:3,name:{th:'เฟรนช์ฟรายส์',en:'French Fries'},desc:{th:'มันฝรั่งทอดกรอบ เสิร์ฟพร้อมซอสดิป',en:'Crispy fries served with dipping sauce.'},category:'snacks',price:59,image:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85'},
{id:4,name:{th:'นักเก็ตไก่',en:'Chicken Nuggets'},desc:{th:'นักเก็ตไก่กรอบนอกนุ่มใน 6 ชิ้น',en:'Six crispy chicken nuggets.'},category:'snacks',price:69,image:'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=85'},
{id:5,name:{th:'ชาไทยเย็น',en:'Thai Iced Tea'},desc:{th:'ชาไทยหอมเข้ม หวานมันกำลังดี',en:'Creamy, aromatic Thai iced tea.'},category:'drinks',price:45,image:'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=900&q=85'},
{id:6,name:{th:'ลาเต้เย็น',en:'Iced Latte'},desc:{th:'กาแฟนมเย็น รสนุ่ม ดื่มง่าย',en:'Smooth and creamy iced latte.'},category:'drinks',price:65,image:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85'},
{id:7,name:{th:'บิงซูสตรอว์เบอร์รี',en:'Strawberry Bingsu'},desc:{th:'น้ำแข็งไสนุ่มละมุน ท็อปด้วยสตรอว์เบอร์รี',en:'Fluffy shaved ice topped with strawberries.'},category:'desserts',price:119,image:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=85'},
{id:8,name:{th:'บราวนีไอศกรีม',en:'Brownie & Ice Cream'},desc:{th:'บราวนีช็อกโกแลตเข้มข้นกับไอศกรีมวานิลลา',en:'Rich chocolate brownie with vanilla ice cream.'},category:'desserts',price:99,image:'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=900&q=85'}
];
export const categories=[['all','ทั้งหมด','All'],['main','อาหารจานหลัก','Main Dishes'],['snacks','ของทานเล่น','Snacks'],['drinks','เครื่องดื่ม','Drinks'],['desserts','ของหวาน','Desserts']];
export const pickupTimes=['10:30','11:00','11:30','12:00','12:30','13:00','17:00','17:30','18:00','18:30'];
