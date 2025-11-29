// 🟦 โจทย์ 1 (ระดับกลาง): โหลดข้อมูลสินค้าทีละขั้น
// คำสั่ง:
// โหลด product จาก API:
// https://fakestoreapi.com/products/1
// โหลด category ของสินค้าชิ้นนั้นจาก API:
// https://fakestoreapi.com/products/category/
// <ชื่อ category>
// แสดง: ชื่อสินค้า + จำนวนสินค้าที่อยู่ในหมวดเดียวกัน

async function product() {
    try {
        const resData = await fetch("https://fakestoreapi.com/products/1")
        const data = await resData.json()

        const resCategory = await fetch("https://fakestoreapi.com/products/category/" + data.category)
        const category = await resCategory.json()

        console.log("Product:" , data.title)
        console.log("Same category count", category.length)
    }catch(error){
        console.log("Error:" ,error)
    }
}
product()

// 🟩 โจทย์ 2 (กลาง): เช็ก Error ใน fetch
// คำสั่ง:
// fetch ไป URL ที่ผิด เช่น
// https://jsonplaceholder.typicode.com/xxx
// ใช้ try/catch จับ error
// ถ้า error: แสดง “Cannot load data!”

async function errorCheck(){
    try{
        const reswrongUrl = await fetch("https://jsonplaceholder.typicode.com/xxx")
        if(!reswrongUrl.ok){
            throw new Error("Bad response")
        }

    }catch(error){
        console.log("Cannot load data!")
    }
}
errorCheck()

// 🟧 โจทย์ 3 (ท้าทายขึ้น): ดึง users ทั้งหมดแบบลูป
// โหลด user จาก API:
// https://jsonplaceholder.typicode.com/users
// ลูป users ทุกคน
// โหลด post ของแต่ละ user (ใช้ user.id)
// แสดงแบบนี้:
// User: Leanne Graham → 10 posts  
// User: Ervin Howell → 10 posts  
// User: Clementine Bauch → 10 posts  
// ...
// ใบ้: ต้องใช้ for-of + await

async function loadAllposts() {
    const resUsers = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await resUsers.json()

    for(const user of users){
        const resPosts = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + user.id)
        const posts = await resPosts.json()
        console.log(`User: ${user.name} → ${posts.length} posts`)
    }

}
loadAllposts()

// 🟪 โจทย์ 4 (โหดนิดหน่อย แต่สนุก): ทำฟังก์ชัน delay แบบเอง
// คำสั่ง:
// เขียนฟังก์ชัน
// function wait(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// เขียน async function ที่ทำแบบนี้:
// เริ่ม download...
// รอ 1 วิ
// 50%...
// รออีก 1 วิ
// 100%... Done!

function wait(ms) {
    return new Promise(resolve => 
        setTimeout(resolve,ms))
}
async function test2() {
    console.log("พอจะม่ีโอกาสไหม")
    await wait(1500)
    console.log("ให้เรากลับมารักกัน")
    await wait(2000)
    console.log("หนังสือเล่มเดิม อาจจบไม่เหมือนเดิม")
    await wait(3000)
    console.log("เล่นนี้เป็นนฉบับปรับปรุง")
}
test2()