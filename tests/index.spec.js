
/*IMPORTACIONES DE LOS TEST SIN API-REST*/

// import app from '../src/app';
// import request from 'supertest';



//TEST CON API-REST jsonplaceholder

const axios = require('axios');

describe('/https://jsonplaceholder.typicode.com', () => {

test('Obtener una publicación por ID', async () => {
  const postId = 1;
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = response.data;

  expect(post).toBeDefined();
  expect(post.id).toBe(postId);
});

test('Obtener lista de usuarios', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  const users = response.data;

  expect(users).toBeDefined();
  expect(users.length).toBeGreaterThan(0);

 });

 test('Crear una nueva publicación', async () => {
    const newPost = {
      title: 'Nuevo post de prueba',
      body: 'Contenido del nuevo post',
      userId: 1
    };
  
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    const createdPost = response.data;
  
    expect(createdPost).toBeDefined();
    expect(createdPost.id).toBeDefined();
    expect(createdPost.title).toBe(newPost.title);
    expect(createdPost.body).toBe(newPost.body);
    expect(createdPost.userId).toBe(newPost.userId);
  });

  test('Actualizar una publicación existente', async () => {
    const postId = 1;
    const updatedPost = {
      title: 'Título actualizado',
      body: 'Contenido actualizado'
    };
  
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost);
    const updatedPostData = response.data;
  
    expect(updatedPostData).toBeDefined();
    expect(updatedPostData.title).toBe(updatedPost.title);
    expect(updatedPostData.body).toBe(updatedPost.body);
  });

  test('Borrar una publicación existente', async () => {
    const postId = 1;
  
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  
    expect(response.status).toBe(200);
  });
  
})


//test sin API-REST


// describe('GET /tasks', () => {

//     test("Deberia responder con un codigo estado 200", async() => { 
//         const response = await request(app).get('/tasks').send();
//         expect (response.statusCode).toBe(200);

//     })

//     test('Responde como un arreglo', async () =>{
//         const response = await request (app).get('/tasks').send()
//         expect(response.body).toBeInstanceOf(Array)
//         //verifica arreglo
//     })

// })

// describe('POST /tasks', ()=>{

//     test('deberia responder con un codigo estado en 200', async () =>{
//         const response = await request(app).post ('/tasks').send();
//         expect(response.statusCode).toBe(200);
//     });

//     test('Esto deberia contener el content-type:application/json en la cabecera', async ()=>{

//         const response = await request(app).post("/tasks").send();
//         expect(response.headers['content-type']).toEqual(expect.stringContaining("json")
        
//         );

//     });

//     test('Deberia responder con un task ID', async () =>{
//         const response = await request(app).post ('/tasks').send({
//             title: "test task",
//             description: "test description",
//         });
//         expect(response.body.id).toBeDefined();

//     })


// })