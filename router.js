import { homePage, findAllStudents, findByAge, findStudent } from "./controller.js";

const router = (app) =>{
    app.get("/",homePage);
    app.get('/find-all-students',findAllStudents);
    app.get('/find-by-age',findByAge);
    app.post('/find-student',findStudent);
}

export default router;