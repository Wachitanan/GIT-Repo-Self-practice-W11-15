// 🔸 เขียนฟังก์ชัน waitOneSecond() ที่รอ 1 วินาทีแล้ว log ว่า
// "Done waiting!"

function waitOneSecond(ms) {
    return new Promise (resolve => {
        setTimeout(resolve,ms)
    })
}

async function test() {
    console.log("Start")
    await waitOneSecond(1000)
    console.log("Done waiting!")
}
test()


// โจทย์ที่ 2 (ระดับเริ่มต้น)
// 🔸 ให้เขียนฟังก์ชัน getUser() ที่โหลดข้อมูลจาก API นี้:
// https://jsonplaceholder.typicode.com/users/3
// แล้ว log ชื่อผู้ใช้ (name)
// ตัวอย่าง output:
// User name: Clementine Bauch
async function getuser() {
try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/3")
    const data = await res.json()

    console.log("User name:",  "" , data.name)

} catch(error){
    console.error("fail")
}
}
getuser()


// โจทย์ที่ 4 (ท้าทายเล็ก ๆ)
// 🔸 เขียนฟังก์ชัน loadAllData() ที่โหลดพร้อมกันแบบเร็วที่สุด
// (ใช้ Promise.all + await)
// โหลดข้อมูลจาก 3 URL นี้พร้อมกัน
// /users/1
// /posts/1
// /comments/1
// แล้ว log ออกมาว่า:
// User: ...
// Post: ...
// Comment: ...

async function loadAllData() {
try{
    const resUser = await fetch("https://jsonplaceholder.typicode.com/users/3")
    const user = await resUser.json()

    const resPosts = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + user.id)
    const posts = await resPosts.json()
    
    if (posts.length > 0) {
        console.log("First post", posts[0].title)
    }else {
        console.log("No posts found")
    }
    }catch(error) {
        console.log("Error:", error)
    }
}
loadAllData()